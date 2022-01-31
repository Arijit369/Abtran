import {db, serverTimestamp} from '../../firebase'
import { useEffect , useState } from 'react'
import { DownloadIcon,ViewGridIcon,ViewListIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Itemicons from '../../Components/Itemicons'
import Slide from 'react-reveal/Slide'
export default function Apps(props) {
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getPostsFromFirebase = [];
  const subscriber = db
    .collection("Approved").where("Category",'>=',props.section).where("Category",'<=' , props.section).orderBy("Category","desc")
    // .collection("Approved").where("Category",'==',props.section)
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
    return<div className="h-full p-5 flex justify-center"><p className='text-center text-xl font-serif font-bold tracking-widest'>Please Wait Loading Content</p></div>
  ;
  }
   // download the app

   const Appdownload=async(id)=>{
    await db.collection('Approved').doc(id).collection('downloads').add({
      text: 1,
      time:serverTimestamp()
    })
  }
  return (

    <div className="md:container-lg md:mx-auto h-auto p-1 mb-2  bg-gray-100  bg-opacity-50   ">
<Slide up>
      {/*  */}
      <div className="flex">
        <div className="container ">
          <p className="mt-2 mx-1  font-serif text-xl font-bold  underline"> {props.section}</p>
        </div>
        <div className="container ">
          {/* <p className="mx-3  font-serif text-2xl font-bold  text-right" onClick={props.changeState}> Back</p>
         */}
          <button className="hover:animate-bounce p-1  md:mx-3 mt-1 mx-2 sm:mx-3  px-2  flex items-center justify-center rounded-md bg-black text-white float-right font-serif" onClick={props.changeState}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
          </svg>&nbsp;Back</button>
        </div>
      </div>
      <div className="sm:grid md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-4 md:space-x-5 lg:space-x-0  lg:py-1 lg:px-7 p-1">
        {/* fetch start */}
        {
          apps.map((i, index) => (
            
            <div className="h-auto lg:w-60  mx-1 my-4 md:my-1  sm:my-1   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg  " key={index}>
   
   <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
   <Link href={`/Screens/${i.id}`}><a><Image src={i.Image1} alt={i.Appname} className=" object-contain  group-hover:opacity-75 rounded-lg" height={300} width={520} layout='responsive' /></a></Link>
   </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">{i.Appname}</p>
            </div>
            <div className="flex  sm:flex-row justify-between ">
            <Link href={`/Screens/${i.id}`}><a> <Itemicons Icon={ViewGridIcon} /></a></Link>
            <a href={i.Apk_File} onClick={()=>Appdownload(`${i.id}`)}><Itemicons Icon={DownloadIcon} /></a>
            </div>
          </div>

        </div>
       
       ))}
       {/* fetch en */}


      </div>
      </Slide>
    </div>





  )
}
