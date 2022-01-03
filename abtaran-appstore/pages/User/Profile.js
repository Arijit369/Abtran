import {useEffect,useState} from 'react'
import Slide  from 'react-reveal/Slide'
import { db } from '../../firebase'

export default function Profile({user}) {
  const [data,setdata]=useState('')
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
  
    return (
      <div className="container mx-auto ">
         <Slide top><div className="container text-white bg-gradient-to-r from-[#06202a] to-blue-400   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {user.displayName}</h1></div></Slide>
      
      <h3 className="text-2xl font-bold leading-6 lg:mx-10 my-2 text-center text-gray-900 font-serif">Your Information</h3>
           
      <Slide bottom>  
                <div className='lg:p-5'>
                <div className="bg-white lg:my-14 lg:mb-32 my-8 shadow-sm rounded-sm container mx-auto p-3">
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
                                <div className="px-4 py-2 font-serif uppercase">{user.displayName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-serif font-semibold">Email</div>
                                <a className="text-blue-800">{user.email}</a>
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
                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">User Id :- {user.uid}
                        </button>
                </div>
                  
                  </div></Slide>
   </div>
    )
}
