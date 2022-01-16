
import { useEffect,useState  } from 'react'
import Image from 'next/image'
import { db } from '../../firebase'
import Link from 'next/link'
import Slide from 'react-reveal/Slide' 
export default function Analytics({user}) {
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);
    const currentUserId = user ? user.uid : null;
  useEffect(() => {
    // for likes
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
    return<div className=" text-center bg-opacity-50 bg-indigo-700 text-white font-bold text-xl mb-2">Loading... please waiit</div>
  ;
  }
    return (
      <div>
  <Slide top><div className="lg:container lg:sticky lg:top-28   z-20 md:container text-white nv bg-opacity-90   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {user.displayName}</h1></div></Slide>
       <Slide bottom>  <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mt-2 mx-auto">
          <div className="flex flex-wrap w-full mb-5 ">
            <div className="lg:w-1/2 w-full  lg:mb-0 ">
              <h1 className="sm:text-3xl font-serif text-2xl font-medium title-font mb-2 text-gray-900">Check Analytics</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
           
          </div>
          <div className="flex flex-wrap -m-5 my-3 ">
          {
 apps.map((i, index) => (
              <div className=" xl:w-1/4 lg:w-1/2 p-2" key={index}>

<div className="bg-gray-100 p-3 rounded-lg ">

<Image className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-125"
    src={i.Image1?i.Image1:{upload}}
   
    alt="..."
  height="400"
  width="590"
  ></Image>

 

<h3 className="tracking-widest mx-3 text-indigo-500 text-sm font-medium title-font">Category: {i.Category}</h3>
  <h2 className="text-sm mx-3 text-gray-900 font-medium font-serif title-font mb-1">App Name: {i.Appname}</h2>
  
  
  <Link href={`/Developers/${i.id}`}><a><button  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 text-center font-serif mx-2 rounded">
  Check App performance
</button></a></Link>
</div>
</div>
             ))}
            {/*  */}
           
       
           
          </div>
          <div className="p-5 flex justify-center">
          <Link href="/Developers/Dashboard"><a><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
Back To Dashboard<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
</svg>
</button></a></Link>
       </div>
        </div>
      </section></Slide>
    </div>
    )
}
