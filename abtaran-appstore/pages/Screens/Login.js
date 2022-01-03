import Image from 'next/image'
import posters from '../../Components/images/posters.jpg'
import Link from 'next/link'
import { useState } from 'react'
import {auth} from '../../firebase'
import { useRouter } from 'next/router'
import Slide from 'react-reveal/Slide'
export default function Login() {
  const router = useRouter()
  const [email,SetEmail]=useState('')
  const [alert , setalert]=useState('')
  const [password,SetPassword]=useState('')
  const [Warning , setWarning]=useState('')
 
  const handleSubmit=async (e)=>{
    e.preventDefault()
    if( !email || !password ){
      setalert('Please Enter All The Feilds')

  }else{

try{
  const result =await auth.signInWithEmailAndPassword(email,password)

  window.alert(`welcome back ${result.user.displayName} good to have you back`);
 
  router.push("/Developers/Dashboard")
}catch(err){
  // window.alert(err.message);
  setWarning(err.message)
}
  }
  } 
    return (
      <div className="  bg-gray-100 bg-opacity-60 hight-auto     ">
        
          {/* alert */}
          {Warning? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Warning</strong>
  <span className="block sm:inline">{Warning}</span>
 
</div>:<></>}
  
{/* alert */}
<Slide top>
        <div className="md:container md:mx-auto flex flex-col sm:flex-row    ">
    
    <div className=" md:w-1/2 md:p-10 my-1 md:my-0 sm:my-0 ">
   
    <Image className="object-fit  image rounded-3xl shadow-xl  "
    src={posters}
    alt="..."
    
    ></Image>
    
    
    </div>
    <div className="  md:w-1/2 p-2 md:my-20 mt-2  ">
    
      <div className="container  h-full  ">
    {/* form */}
    <div className=" md:p-5 sm:p-1 w-full shadow-lg rounded-3xl  bg-white ">
    {alert?
           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
           <strong className="font-bold">Dear User </strong>
           <span className="block sm:inline">{alert}</span>
           
         </div>:<></>}
        <div>
         
        <h3 className="md:mt-2 text-center text-2xl font-bold text-gray-900">
           Dear User Sign-in To Your Account
          </h3>
         <h6 className="md:mt-2 text-center font-bold text-gray-900 ">didn&apos;t have an account sigup from here <Link href="/Screens/Signup"><a><p className="text-blue-900 underline">SignUp Now</p></a></Link></h6>
         
        </div>
        <Slide right>
        <form className=" p-3 w-full" action="#"  onSubmit={(e)=>handleSubmit(e)}>
         
          <div className="rounded-md  -space-y-px p-5  ">
            <div className="mt-1">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address"   name="email" value={email} onChange={(e)=>SetEmail(e.target.value)} type="email" autoComplete="email"  className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-s py-3 my-3" placeholder="Email address"/>
            </div>
            <div className="mt-1">
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" value={password} onChange={(e)=>SetPassword(e.target.value)} type="password" autoComplete="current-password"  className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-3" placeholder="Password"/>
            </div>
            <div className="flex items-center">
                <input
                  value="thanks"
                 
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Agree To Terms And Conditions
                </label>
              </div>

              <div className="my-2 p-1 flex justify-center">
                   <Link href="/Screens/Forgot"><a className='text-indigo-700 text-lg font-serif hover:underline hover:text-blue-700'>Forgot Password</a></Link>
              </div>
          </div>
    
          
    
          <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 ">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in 
            </button>
            
          </div>
        </form>
        </Slide>
      </div>
    {/* form */}
      </div>
    </div>
    
    
    
    
    
    </div>
    </Slide>
    </div>
    )
}
