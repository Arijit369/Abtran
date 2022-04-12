import { useEffect,useState  } from 'react'
import upload from '../../Components/images/Upload.png'
import Image from 'next/image'
import Link from 'next/link'
import { db } from '../../firebase'
import Slide from 'react-reveal/Slide'
export default function Viewuploads({user}) {
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [Warning , setwarning]=useState('')
  const currentUserId = user ? user.uid : null;
useEffect(() => {
  const getPostsFromFirebase = [];
  const subscriber = db
    .collection("Approved").where('Userid', '==', currentUserId)
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
}, [apps, currentUserId, loading]); 
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
   <Slide top><div className="lg:container lg:sticky lg:top-28   z-20 md:container text-white nv bg-opacity-90   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {user.displayName}</h1></div></Slide>
      <section className="text-gray-600 body-font">
        {Warning?<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold"></strong>
  <span className="block sm:inline">{Warning}.</span>
  
</div>:<></>}
      <Slide bottom>  <div className="container px-5 py-5 mt-2 mx-auto">
          <div className="flex flex-wrap w-full mb-5 ">
            <div className="lg:w-1/2 w-full  lg:mb-0 ">
              <h1 className="sm:text-3xl font-serif text-xl font-medium title-font mb-2 text-gray-900">All Your Uploaded Apps Are Here After Security Check </h1>
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
  
  <div className='flex justify-between'>
  <Link href={`${i.id}`}><a><button  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Analytics
</button></a></Link>
  <button onClick={()=>Delete(`${i.id}`)} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Delete
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