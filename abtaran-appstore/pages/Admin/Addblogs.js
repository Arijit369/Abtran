import { useState } from "react"
import { db , serverTimestamp } from "../../firebase"

export default function Addblogs() {
    const [name , setname]=useState('')
    const [desc , setdesc]=useState('')
    const [link , setlink]=useState('')
    const [alert , setalert]=useState('')
    const Submit =async ()=>{
        if(!name || !desc || !link){
            setalert('Please Enter All Feilds ! Feilds Cannot Be Empty')}
            else{
        try{
              await db.collection('Blogs').add({
                  Name:name,
                  Description:desc,
                  Link : link,
                  Updated_At:serverTimestamp()
              })
              window.alert('Blogs Posted')
        }catch(err){
            console.log(err)
        }
    }
        
    }
    return (
        <div>
           <div className="md:container mx-auto lg:px-48 mb-5">
              
           <div className="lg:py-10">
  <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 ">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        App Name
      </label>
      <input value={name} onChange={(e)=>setname(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="App Name"/>
      {alert?<p className="text-red-500 text-xs italic">{alert}</p>:<></>}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
       App Description
      </label>
      <textarea value={desc} onChange={(e)=>setdesc(e.target.value)} rows="4" cols="50" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="App Description"/>
      {alert?<p className="text-red-500 text-xs italic">{alert}</p>:<></>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
       App video Or File Link
      </label>
      <input value={link} onChange={(e)=>setlink(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Video Link"/>
      {alert?<p className="text-red-500 text-xs italic">{alert}</p>:<></>}
    </div>
    <div className="flex items-center justify-between">
      <button onClick={Submit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
     
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2021 Abtaran.in. All rights reserved.
  </p>
</div>

           </div>
            
        </div>
    )
}
