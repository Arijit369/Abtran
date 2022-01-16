import {  useRouter  } from "next/router"
import { db , serverTimestamp } from "../../firebase";
import Image from 'next/image'

export default function Viewpage({app}) {
  const router = useRouter()
   
 
  const { id } = router.query
   
const Approve =()=>{
  try{
    db.collection('Approved').add({
    Category:app.Category,
     Appname:app.Appname,
     Description:app.Description,
     Privacy:app.Privacy_Policy,
     Apk_File:app.Apk_File,
     Image1:app.Image1,
     Image2:app.Image2,
     Name:app.Name,
     Userid:app.Userid,
     version:app.Version,
   
   UpdatedAt:serverTimestamp()
 })
//   M.toast({html: 'Blog Created',classes:"green"}) 
 
window.alert(`Dear App Approved To Abtaran`)
 db.collection("Uploads").doc(id).delete().then(() => {
      setwarning('App Deleted')
    }).catch((err) => {
      console.log(err)
    })
router.push("/Admin/Approve")

}catch(err){
  console.log(err)
  
   window.alert(`Dear Approval Failed`)
   // router.push("/Developers/Dashboard")
}
    
}
    return (
        <div>
            
            <div className="container mx-auto lg:my-6   py-1 lg:py-10  lg:px-12 px-2 flex gap-5 flex-col lg:flex-row ">
            <div className="lg:w-1/2  ">

            <Image className="rounded object-center    hover:scale-125 "
    src={app.Image1}
   
    alt="..."
  height="350"
  width="500"
  ></Image>
  {/* <div className=" h-24"></div> */}

            </div>
            <div className=" lg:w-1/2 sm:max-w-full ">

            <h1 className="text-center p-3 text-gray-800 font-serif font-bold text-3xl underline">{app.Appname}</h1>
            <h1 className="text-center p-3 text-gray-800 font-serif font-bold text-xl underline"><span>Marketing Status</span>{app.Marketing}</h1>
            <h1 className="text-center px-3 my-1 text-gray-800 font-mono font-bold text-xl ">Category:-{app.Category}&nbsp;&nbsp;&nbsp;PostedBy:{app.Name}</h1>
            <h1 className="text-center px-3 my-1 text-gray-800 font-mono font-bold text-sm ">{app.Privacy_Policy}</h1>
            <h1 className="text-justify px-3 text-gray-800 font-mono font-bold text-sm ">Description:-{app.Description}</h1>

            <div className="container  mx-auto py-6 flex gap-32 lg:gap-80 md:gap-96 flex-row lg:flex-row lg:my-10 md:my-7 sm:my-5 my-4">
          <a href={app.Apk_File}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 lg:mx-4 md:mx-10 rounded flex">
  Download<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
</button></a> 
 <button onClick={Approve} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 lg:mx-4 rounded flex">
  Approve<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
</button>
            </div>
            </div>
              
            </div>
  
  
      </div>
    )
}
export async function getServerSideProps({params:{id}}) {
    const result =  await db.collection('Uploads').doc(id).get()
   
   return {
     props: {
         
        app:{
            ...result.data(),
            UpdatedAt:result.data().UpdatedAt.toMillis()
        },
     },
   }
 }


