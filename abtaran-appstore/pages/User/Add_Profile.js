import {useState} from 'react'
import Image from 'next/image'
import profile from '../../Components/images/profile.png'
import { useRouter } from 'next/router'
// import {db,serverTimestamp} from '../firebase'
import { db,serverTimestamp } from '../../firebase'
import Navigation from '../Developers/Navigation'
// import {storage,db,serverTimestamp} from '../firebase'

export default function Add_Profile({user}) {
  const [alert , setalert]=useState('')
    const [city,setcity] = useState('')
    const [state,setstate] = useState('')
    const [phone,setphone] = useState('')
    const [desc,setdesc] = useState('')
    const [pin,setpin] = useState('')
    const [dob ,setdob]=useState('')
    const router = useRouter()

  

    const SubmitDetails = (e)=>{
e.preventDefault();
if( !city || !state || !phone || !desc || !pin || !dob || !pin ){
  setalert('Please Enter All The Feilds')

}else{
      try{
           db.collection('Profiles').doc(user.uid).set({
             city: city,
            state:state,
           pincode: pin,
            phone:phone,
            description:desc,
            email:user.email,
            dob:dob,
            name:user.displayName,
            // imageUrl:url,
            userid:user.uid,
          updatedAt:serverTimestamp()
        })
      //   M.toast({html: 'Blog Created',classes:"green"}) 
      console.log("profile updated")  
      window.alert(`dear ${user.displayName} profile updated`)
      router.push("/Developers/Dashboard")
      }catch(err){
          console.log("failed")    
          router.push("/Developers/Dashboard")
      }
        
    }
  

    }
    return (
        <div className="container mx-auto p-1 lg:p-1">
         
         <h3 className="text-lg font-medium leading-6 lg:mx-10 mx-1 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-justify text-gray-900 font-bold font-mono text-lg lg:mx-10 mx-1s">
              Welcome user, please provide your details for publishing your apps, receiving rewards and future contact purposes. 
              </p>
        <div className="md:container md:mx-auto flex flex-col sm:flex-row gap-2 lg:mt-10 my-3  ">
       
          <div className=" md:w-1/2  ">
            <div className=" shadow-lg ">
            <Image className="p-2 object-cover "
    src={profile}
    alt="..."
    
    ></Image>
            </div>
          </div>
          <div className="  md:w-1/2 lg:p-5 lg:mt-3 ">
         
            <form className=" p-1">
              <div className="shadow-lg overflow-hidden rounded-xl">
             
                <div className="px-4 py-5 bg-white sm:p-6">
                {alert?
           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
           <strong className="font-bold">Dear User </strong>
           <span className="block sm:inline">{alert}</span>
           
         </div>:<></>}
                  <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Your Email</label>
                      <input type="text" value={user.email}  id="first-name"  className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Your Name</label>
                      <input type="text" value={user.displayName} id="first-name"  className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">phone number</label>
                      <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} id="first-name"  className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">city</label>
                      <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} id="first-name"  className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
      
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">state</label>
                      <input type="text" value={state}  onChange={(e)=>setstate(e.target.value)}  id="last-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">pincode</label>
                      <input type="text" value={pin}  onChange={(e)=>setpin(e.target.value)}  id="last-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">About Yourself</label>
                      <textarea rows="3" cols="50" value={desc}  onChange={(e)=>setdesc(e.target.value)}  placeholder="short discription about your self" className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    </div>      
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">DOB</label>
                      <input type="date" value={dob}  onChange={(e)=>setdob(e.target.value)}  id="last-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                  
                   
      
      
                   
                   
      
                   
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button onClick={SubmitDetails} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
