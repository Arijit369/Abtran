import { useEffect,useState  } from 'react'
import upload from '../../Components/images/Upload.png'
import Image from 'next/image'
import Link from 'next/link'
import { db } from '../../firebase'
import Slide from 'react-reveal/Slide'
export default function Approve() {
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [Warning , setwarning]=useState('')
  
useEffect(() => {
  const getPostsFromFirebase = [];
  const subscriber = db
    .collection("Uploads").orderBy("UpdatedAt", "desc")
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          id: doc.id, // `id` given to us by Firebase
        });
      });
      setApps(getPostsFromFirebase);
      setLoading(false);
      
      
    });

  // return cleanup function
  return () => subscriber();
}, [apps, loading]); 
if (loading) {
  return<div className="h-screen w-full text-center bg-opacity-50 bg-indigo-700 text-white font-bold text-xl mb-2">Loading... please waiit</div>
;
}
// delete app
const Delete =(id)=>{
  console.log(id)
  db.collection("Approved").doc(id).delete().then(()=>{
  setwarning('App Deleted')
  }).catch((err)=>{
    console.log(err)
  })
 
}
  return (
    <div>
  
      <section className="text-gray-600 body-font">
        {Warning?<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold"></strong>
  <span className="block sm:inline">{Warning}.</span>
  
</div>:<></>}
      <Slide bottom>  <div className="container px-5 py-5 mt-2 mx-auto">
          <div className="flex flex-wrap w-full mb-5 ">
            <div className="lg:w-1/2 w-full  lg:mb-0 ">
              <h1 className="sm:text-3xl font-serif text-xl font-medium title-font mb-2 text-gray-900">All Your Uploaded Apps Are Here After security and review </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full font-serif leading-relaxed text-justify text-gray-500">From here, you can check and delete your apps, which are uploaded on Abtaran App Store </p>
          </div>
          <div className="flex flex-wrap -m-5 my-3 ">
          {
 apps.map((i, index) => (
              <div className=" xl:w-1/4 lg:w-1/2 p-2" key={index}>

<div className="bg-gray-100 p-3 rounded-lg">

<Image className="h-40 rounded w-full object-center mb-6 hover:scale-125"
    src={i.Image1?i.Image1:{upload}}
   
    alt="..."
  height="400"
  width="590"
  ></Image>

 

<h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">Category: {i.Category}</h3>
  <h2 className="text-sm title-font  text-gray-900  font-serif title-font mb-1">App Name: {i.Appname}</h2>
  
  <div className="flex  justify-between  container p-1 mx-auto ">

<Link href={`/Admin/${i.id}`}><a><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
  Review App <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
</button></a></Link>
<button onClick={() => Delete(`${i.id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
</button>
</div>
</div>
</div>
             ))}
            {/*  */}
           
       
           
          </div>
          
        </div>
        </Slide>
      </section>
      <div className="p-5 flex justify-center">
            <Link href="/Admin/Admindashboard"><a><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
              Back To Dashboard<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
              </svg>
            </button></a></Link>
          </div>
    </div>
  )
}

// export async function getServerSideProps(){
  
//   const querySnap= await db.collection('Uploads').get()
//   const Allapps =  querySnap.docs.map(docSnap=>{
//     return {
//       ...docSnap.data(),
      
//       id:docSnap.id
//     }
//   })
// console.log(Allapps)
//   return{
//     props:{Allapps},
//   }
// }