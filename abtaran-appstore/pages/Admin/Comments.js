import {  useRouter  } from "next/router"
import { db } from "../../firebase";

import { useEffect , useState} from "react";
export default function Comments() {
  const router = useRouter()
  
 const [loading, setLoading] = useState(true);
 const [apps, setApps] = useState([]);

useEffect(() => {
 const getPostsFromFirebase = [];
 const subscriber = db
   .collection("Comments").orderBy("name" , "desc")
   .onSnapshot((querySnapshot) => {
     querySnapshot.forEach((doc) => {
       getPostsFromFirebase.push({
         ...doc.data(), //spread operator
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

    return (
      
      <div className="p-5 md:container mx-auto ">
          
        <h1 className="text-center font-bold font-serif underline text-3xl text-green-800">All Comments</h1>
        {/* {apps.map((item, index) => (

<h6 key={index} className="font-sans font-semibold text-center lg:mx-7 mx-2 my-1 text-md"> {item.text}. PostedBy:{item.email} </h6>
))} */}
<table className="table-auto p-5 md:container mx-auto" >
  <thead>
    <tr>
      <th>Comment</th>
      <th>Commented By</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
  {apps.map((item, index) => (
    <tr className="bg-green-100  py-5" key={index} >
      <td className="text-center p-5 text-xl font-serif font-bold">{item.name}</td>
      <td className="text-center p-5 text-xl font-serif font-bold">{item.emai}</td>
      <td className="text-center p-5 text-xl font-serif font-bold">{item.msg}</td>
      
    </tr>
   ))}
  </tbody>
</table>
      </div>
       
    )
}



