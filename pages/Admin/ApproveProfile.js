import { useEffect,useState  } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { db } from '../../firebase'
import Slide from 'react-reveal/Slide'
export default function ApproveProfile({user}) {
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);
    const [Warning , setwarning]=useState('')
    
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Profiles").orderBy("updatedAt", "desc")
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
 
// aprove Profiles
const approveprofile =(id)=>{
  try{
    db.collection("Profiles").doc(id).update({status: "Active"});
    window.alert(`profile  marked as active`)
  }catch(err){
    window.alert('Server Error Try Again Later')
  }
    
}
  
  return (
    <div>
        <div className='md:container border-2 m-auto border-black p-1'>
          <div className='flex gap-2 flex-col justify-center items-center'>
          {apps.map((i, index) => (
              <div className='lg:w-3/4 w-full p-5 border-2 border-black'>
             
                  <div onClick={() => approveprofile(`${i.id}`)}>{i.id}</div>
                    <div className=''>{i.status}</div> 
              </div>
                ))}
              <div className='lg:w-3/4 w-full p-5 border-2 border-black'>

</div>

          </div>
        </div>
    </div>
  )
}
