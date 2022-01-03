import { useEffect,useState } from 'react'
import Image from 'next/image'
import {db} from '../../firebase'
import { DownloadIcon, ViewGridIcon, ViewListIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import Slide from 'react-reveal/Slide'
import Itemicons from '../../Components/Itemicons'
export default function App_row(props) {
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getPostsFromFirebase = [];
  const subscriber = db
    .collection("Approved").where("Category","<=",props.title).where("Category",">=",props.title).orderBy("Category","desc")
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator'UpdatedAt',"desc"
          id: doc.id, // `id` given to us by Firebase
         key:doc.id
        });
      });
     
      setApps(getPostsFromFirebase);
      
      setLoading(false);
    
     
    });
    return () => subscriber();
  }, [apps, props.title]); 
  if (loading) {
    return<div className="  h-screen p-12 animate-pulse  text-center bg-opacity-50 bg-indigo-700 text-white font-bold text-xl mb-2">Loading... please waiit</div>
  ;
  }
  return (

    <div className=" md:mx-auto h-auto relative  bg-gray-100  bg-opacity-50  ">
      {/* <p className="mx-2 font-serif text-2xl font-bold  underline" onClick={() => { props.changeState(props.title) }}>{props.title}</p>
         */}
         <Slide left>
      <div className="flex">
        <div className="container ">
          <p className="mx-2 mt-1 font-serif text-xl font-bold  underline"> {props.title}</p>
        </div>
        <div className="container ">

          <button className="hover:animate-bounce p-1 mx-1  mt-1 px-2  flex items-center justify-center rounded-md bg-black text-white float-right font-serif"  onClick={() => {props.changeState(props.title)}}>View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg>
          </button>
        </div>
      </div>

      
      <div className=" shop flex p-7 space-x-3 xl:p-9 md:p-9 gap-14 sm:gap-16 xl:gap-20 md:gap-20 text-2xl whitespace-rowrap   overflow-x-scroll scrollbar-hide">
        {/* starts here */}
        
        {/* starts here */}
        
      
       
   
{
 apps.map((i, index) => (
  
        <div key={index}>
  
  <div className=" mx-2 my-1 md:my-2 xl:my-2 cursor-pointer   scale-150  hover:z-50 p-2 bg-white shadow-lg rounded-lg" >

  
  <Link href={`/Screens/${i.id}`}><a> <Image src={i.Image1} alt={i.Appname} className=" object-center object-cover rounded-t-lg group-hover:opacity-75  hover:scale-105" height={200} width={340} layout="responsive" /></a></Link>
      
   
    <div className="links rounded-b-lg">
    <div className="text-center  hover:scale-105">
    <p className=" font-serif text-sm px-1 ">{i.Appname.slice(0,20)}...</p>
  </div>
      <div className="flex  sm:flex-row justify-between  ">
      <Link href={`/Screens/${i.id}`}><a> <Itemicons Icon={ViewGridIcon} /></a></Link>
      {/* <Itemicons Icon={ViewListIcon} /> */}
        <a href={i.Apk_File}><Itemicons Icon={DownloadIcon} /></a>
      </div>
    </div>
  </div>
  
  </div>
    
    ))}


     
       
        
        
        

      </div>
      </Slide>
    </div>


  )
}
