import {useEffect,useState} from 'react'
import Slide  from 'react-reveal/Slide'
import { db , serverTimestamp } from '../../firebase'

export default function Profile({user}) {
  const [data,setdata]=useState('')
  const [city , SetCity]=useState('')
  const [phone , SetPhone]=useState('')
  const [pin , SetPin]=useState('')
  const [state , SetState]=useState('')
  const [dob , Setdob]=useState('')
  const [desc , SetDesc]=useState('')
  useEffect(()=>{
    if(user){
        const docRef =db.collection('Profiles').doc(user.uid)
        docRef.onSnapshot(docSnap=>{
            if(docSnap.exists){
                
                setdata(docSnap.data())
                // console.log(data,'user data')
               
            }else{
                console.log("no docs")
            }
        })

    }else{
        console.log("login first")
    }
},)


const Submit=async ()=>{
    // db.collection('Profiles').doc(user.uid).add({
    //     city:city,state:state,pincode:pin,phone:phone,dob:dob,description:desc,name:user.displayName,userid:user.uid,email:user.email,updatedAt:serverTimestamp()
    //   })
    // window.alert(`welcome ${user.displayName} your Profile has been upated successfully`);
    // window.location.reload(false);

    if(!dob||!city||!state||!pin||!dob){
        window.alert('feilds cannot be empty')
    }else{
        var collectionRed = db.collection("Profiles").doc(user.uid);

// Set the "capital" field of the city 'DC'
        try {
            await collectionRed.update({
                city: city, state: state, pincode: pin, phone: phone, dob: dob, description: desc, name: user.displayName, userid: user.uid, email: user.email, updatedAt: serverTimestamp()
            })
            window("Profile successfully updated!")
            window.location.reload(false)
        } catch (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error)
        }
    }
}
  
    return (
      <div className="container mx-auto ">
       <Slide top><div className="lg:container lg:sticky lg:top-28  z-20 md:container text-white nv bg-opacity-90   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {data.name}</h1></div></Slide>
      
      <h3 className="text-2xl font-bold leading-6 lg:mx-10 my-2 text-center text-gray-900 font-serif">Your Information</h3>
           
      <Slide bottom>  
                <div className='lg:p-5'>
                <div className="bg-white lg:my-14 lg:mb-5 my-6 shadow-sm rounded-sm container mx-auto p-3">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                        <Slide left>
                        <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">Name</div>
                                <div className="px-4 py-2 font-serif uppercase">{data.name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">Email</div>
                                <a className="text-blue-800">{data.email}</a>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">State</div>
                                <div className="px-4 py-2 font-serif">{data.state}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">Contact No.</div>
                                <div className="px-4 py-2 font-serif">{data.phone}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">City</div>
                                <div className="px-4 py-2 font-serif">{data.city}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">Pincode</div>
                                <div className="px-4 py-2 font-serif">{data.pincode}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">About Yourself</div>
                                <div className="px-4 py-2 font-serif">
                                    <a className="text-blue-800">{data.description}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">Birthday</div>
                                <div className="px-4 py-2 font-serif">{data.dob}</div>
                            </div>
                        </div>
                    </div>
                        </Slide>
                    <button
                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">User Id :- {data.userid}
                        </button>
                </div>
                  
                  </div></Slide>

                  <div className='flex flex-col lg:container mx-auto justify-center items-center mb-2'>
                   <p className='text-xl font-serif text-gray-800'>   Update Your Details</p>
                      <div className='lg:w-3/5 rounded-lg shadow-md  p-2'>
                      <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Phone No</label>
                            <input id="password" name="password" value={phone} onChange={(e) => SetPhone(e.target.value)} type="number" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Phome Number" />
                          </div>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">City</label>
                            <input id="password" name="password" value={city} onChange={(e) => SetCity(e.target.value)} type="text" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Enter City" />
                          </div>
                        </div>
                        <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Pin Code</label>
                            <input id="password" name="state" value={pin} onChange={(e) => SetPin(e.target.value)} type="number" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Pincode" />
                          </div>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">State</label>
                            <input id="password" name="state" value={state} onChange={(e) => SetState(e.target.value)} type="text" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Enter State" />
                          </div>
                        </div>
                        <div className='w-full'>
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">About Yourself</label>
                          <textarea rows="3" cols="50" value={desc} onChange={(e) => SetDesc(e.target.value)} placeholder="short discription about your self" className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Birth Date</label>
                            <input id="password" name="state" value={dob} onChange={(e) => Setdob(e.target.value)} type="date" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Enter DOB" />
                          </div>
                          <div className='lg:w-1/2 '>
                          <button onClick={()=>Submit()}  className="group relative w-full flex justify-center font-serif py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 mt-9 ">
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            {/* <!-- Heroicon name: solid/lock-closed --> */}
                            <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Update
                        </button>
                          </div>
                        </div>
                      </div>
                  </div>
   </div>
    )
}
