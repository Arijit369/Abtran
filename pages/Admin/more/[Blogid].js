import {  useRouter  } from "next/router"
import { db , serverTimestamp } from "../../../firebase";
import Image from 'next/image'
import { useEffect , useState} from "react";
export default function Comments() {
  const router = useRouter()
  const { Blogid } = router.query
  const [warning ,setwarning]=useState('');
 const [loading, setLoading] = useState(true);
 const [apps, setApps] = useState([]);

useEffect(() => {
 const getPostsFromFirebase = [];
 const subscriber = db
   .collection("Approved").doc(Blogid).collection('comments').orderBy('time','desc')
   .onSnapshot((querySnapshot) => {
     querySnapshot.forEach((doc) => {
       getPostsFromFirebase.push({
         ...doc.data(), //spread operator
         t:doc.data().time.toDate().toDateString(),
         id: doc.id, // `id` given to us by Firebase
        key:doc.id
       });
     });
    
     setApps(getPostsFromFirebase);
     setLoading(false);
    
    
   });

 // return cleanup function
 return () => subscriber();
}, [apps]); 
if (loading) {
 return<div className=" h-screen p-12 animate-pulse  lg:w-screen text-center bg-opacity-50 bg-indigo-700 text-white font-bold text-xl mb-2">Loading... please waiit</div>
;
}

//   M.toast({html: 'Blog Created',classes:"green"}) 
// approve apps
const Delete=(id)=>{
  console.log(id)
  db.collection("Approved").doc(Blogid).collection('comments').doc(id).delete().then(()=>{
   setwarning('Comment Deleted')
  }).catch((err)=>{
    console.log(err)
  })
 
}

    return (
      
      <div className="p-5 md:container mx-auto ">
           {warning?<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold"></strong>
  <span className="block sm:inline">{warning}.</span>
  
</div>:<></>}
        <h1 className="text-center font-bold font-serif underline text-3xl text-green-800">All Comments</h1>
        {/* {apps.map((item, index) => (

<h6 key={index} className="font-sans font-semibold text-center lg:mx-7 mx-2 my-1 text-md"> {item.text}. PostedBy:{item.email} </h6>
))} */}
<table className="table-auto p-5 md:container mx-auto" >
  <thead>
    <tr>
      <th>Comment</th>
      <th>Commented By</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {apps.map((item, index) => (
    <tr className="bg-green-100  py-5" key={index} >
      <td className="text-center p-5 text-xl font-serif font-bold">{item.text}</td>
      <td className="text-center p-5 text-xl font-serif font-bold">{item.email}</td>
      <td className="text-center p-5 text-xl font-serif font-bold">{item.t}</td>
      <td className="text-center p-5 text-xl font-serif font-bold"><button onClick={() => Delete(`${item.id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
</button></td>
    </tr>
   ))}
  </tbody>
</table>
      </div>
       
    )
}



