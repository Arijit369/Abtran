import React,{useState} from 'react'
import { db , serverTimestamp } from "../../firebase";
import {useRouter} from 'next/router'
export default function Update({app}) {
  const router = useRouter()
  const { id } = router.query
  const [desc , setdesc]=useState('')
  const submit =()=>{
    console.log(desc)
  }
  console.log(id)


  return (
        <div className='flex justify-center py-10  bg-gray-100 bg-opacity-50 '>
           
           <form className="lg:w-3/4 shadow-md rounded-lg p-5 bg-white">
           <h1 className='text-3xl font-mono text-gray-700 font-semibold mb-2 underline text-center  '>Update Your Uploaded App</h1><br/>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        App Name
      </label>
      <input value={app.Appname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="App Name"/>
   
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
       Version
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Version"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
       Apk
      </label>
      <input  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="file" placeholder=" New Apk"/>
      <p className="text-gray-600 text-xs italic">Upload Apk With New Version</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="desc">
       Description
      </label>
      <textarea rows="3" value={desc} onChange={(e)=>setdesc(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="desc" type="text" placeholder=" New App Description"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <button onClick={submit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
</form>
            
        </div>
    )
}
export async function getServerSideProps({params:{id}}) {
  const result =  await db.collection('Approved').doc(id).get()

 return {
   props: {
       
      app:{
          ...result.data(),
          
          UpdatedAt:result.data().UpdatedAt.toMillis()
      },
   },
 }
}