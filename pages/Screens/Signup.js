
import Link from 'next/link'
import { useState } from 'react'
import {auth , db, serverTimestamp} from '../../firebase'
import { useRouter } from 'next/router'
import Slide from 'react-reveal/Slide'
import Footer from '../../Components/Footer'

export default function Signup() {
  const router = useRouter()
  const [alert , setalert]=useState('')
  const [desc , SetDesc]=useState('')
  const [email,SetEmail]=useState('')
  const [password,SetPassword]=useState('')
  const [name,SetName]=useState('')
  const [pin ,SetPin]=useState('')
  const [phone ,SetPhone]=useState('')
  const [city , SetCity]=useState('')
  const [state ,SetState]=useState('')
  const[birth ,SetBirth]=useState('')

  const [rating, setrating] = useState(0)

   // radio
   const changeRating = (e) => {
    setrating(e.target.value)
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()

    if(!password || !email || !name || !rating || !city || !phone || !state || !pin || !birth || !desc){
      setalert('Please Enter All The Feilds')

  }else{
    
try{
  const result =await auth.createUserWithEmailAndPassword(email,password)
  await result.user.updateProfile({
    displayName:name
  })

  db.collection('Profiles').doc(result.user.uid).set({
    city:city,state:state,pincode:pin,phone:phone,dob:birth,description:desc,name:result.user.displayName,userid:result.user.uid,email:result.user.email,status:"Active",updatedAt:serverTimestamp()
  })
  window.alert(`welcome ${result.user.displayName} your Profile has been created successfully`);
  router.push("/Screens/Login")
}catch(err){
  
  setalert(err.message)
}
  }
  }

  const myStyle={
     width: "150px",
     backgroundColor: "#1065b7",
      textAlign: "center",
       fontWeight: "800",
        padding: "11px 0px",
         color: "white", 
         fontSize: "12px",
          display: "inline-block",
      textDecoration: "none",
       
  }
    return (
        <><div className="  bg-gray-100 bg-opacity-60 hight-auto     ">
        <Slide top>
          <div className="md:container md:mx-auto flex flex-col sm:flex-row    ">

            <div className=" md:w-1/2 md:p-10 my-3  p-5  ">

            <img className="object-fit  image rounded-3xl shadow-xl  "
                src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fdeveloper1.jpg?alt=media&token=8ec82b2e-d611-4951-8c3f-9065137dd18c"
                alt="..."
                 
              ></img>




            </div>
            <div className="  md:w-1/2 p-2 my-3   ">

              <div className="container  h-full  ">
                {/* form */}
                <div className=" md:p-5 sm:p-1 w-full shadow-lg rounded-3xl bg-white    ">
                  <div>

                    <h3 className="md:mt-2 text-center text-2xl font-bold text-gray-900">
                      Dear User Create Your Account
                    </h3>
                    <h6 className="md:mt-2 text-center font-bold text-gray-900 ">"Already have an account? Sign In from here"<Link href="/Screens/Login"><a><p className="text-blue-900 underline">Sign In Now</p></a></Link></h6>

                  </div>
                  <Slide bottom>
                    <form className=" px-3 w-full" action="#" onSubmit={(e) => handleSubmit(e)}>
                      {alert ?
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          <strong className="font-bold">Dear User </strong>
                          <span className="block sm:inline">{alert}</span>

                        </div> : <></>}
                      <div className="rounded-md  -space-y-px p-5  ">
                        {/* <div>
      
      </div>
      <div>
       
      </div> */}
                        <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="name" className="">Your Name</label>
                            <input id="name" name="name" value={name} onChange={(e) => SetName(e.target.value)} type="text" autoComplete="name" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-s py-3 mt-2" placeholder="Enter Name" />
                          </div>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="email-address" className="">Email address</label>
                            <input id="email-address" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} type="email" autoComplete="email" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-s py-3 mt-2" placeholder="Email address" />
                          </div>
                        </div>
                        <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Phone No</label>
                            <div className='flex flex-row'>
                            <span className="appearance-none rounded relative block px-2 border bg-gray-300  text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2">+91</span>
                            <input id="password" name="password" value={phone} onChange={(e) => SetPhone(e.target.value)} type="telNo" minlength="10" maxlength="10" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="your phone number" />
                              
                            </div>
                          </div>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">City</label>
                            <input id="password" name="password" value={city} onChange={(e) => SetCity(e.target.value)} type="text" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Enter City" />
                          </div>
                        </div>
                        <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">State</label>
                            <input id="password" name="password" value={state} onChange={(e) => SetState(e.target.value)} type="text" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Enter State" />
                          </div>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Pincode</label>
                            <input id="password" name="password" value={pin} onChange={(e) => SetPin(e.target.value)} type="number" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Pincode" />
                          </div>
                        </div>
                        <div className='flex lg:flex-row flex-col w-full gap-2 '>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Birth Date</label>
                            <input id="birth" name="birth" value={birth} onChange={(e) => SetBirth(e.target.value)} type="date" autoComplete="birth" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Date Of Birth" />
                          </div>
                          <div className='lg:w-1/2 '>
                            <label htmlFor="password" className="">Password</label>
                            <input id="password" name="password" value={password} onChange={(e) => SetPassword(e.target.value)} type="password" autoComplete="current-password" className="appearance-none rounded relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm py-3 my-2" placeholder="Password" />
                          </div>
                        </div>
                        <div className='w-full'>
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">About Yourself</label>
                          <textarea rows="3" cols="50" value={desc} onChange={(e) => SetDesc(e.target.value)} placeholder="short discription about your self" className="mt-1 block w-full py-2 px-3 border border-gray-300 p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <div className="flex items-center">
                          <input
                            value="thanks"
                            onChange={changeRating}
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Agree to terms and policies
                          </label>
                        </div>
                      </div>



                      <div>
                        {/* paypal button for payment */}
                        {/* <a target='_blank' href="https://pmny.in/Hrb5JbxaJjrE"><button   className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 mt-3 ">
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                           
                            <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Pay Now To Subscribe
                        </button></a> */}
                       
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 mt-3 ">
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            {/* <!-- Heroicon name: solid/lock-closed --> */}
                            <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Sign Up
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
      </div><Footer /></>
    )
}
