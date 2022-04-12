import { useEffect, useState } from 'react'
import Image from 'next/image'
import { db } from '../../firebase'
import { DownloadIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Slide from 'react-reveal/Slide'
import Footer from '../../Components/Footer'
import Itemicons from '../../Components/Itemicons'
import View from './View'
export default function Latest() {
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [Showapp, setShowapps] = useState(false)
  const [appTitle, setappTitle] = useState("")
  const ShowSignleapp = (app_title) => {
    setShowapps(!Showapp)
    setappTitle(app_title)
}
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      // .collection("Approved").where("Category","<=",props.title).where("Category",">=",props.title).orderBy("Category","desc")
      .collection("Approved").orderBy("UpdatedAt","desc").limit(20)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator'UpdatedAt',"desc"
            id: doc.id, // `id` given to us by Firebase
            key: doc.id
          });
        });

        setApps(getPostsFromFirebase);

        setLoading(false);


      });
    return () => subscriber();
  }, [apps]);
  if (loading) {
    return<div className="h-full p-5 flex justify-center"><p className='text-center text-xl font-serif font-bold tracking-widest'>Please Wait Loading Content</p></div>
      ;
  }
  // download the app

  const Appdownload = (id) => {
    db.collection('Approved').doc(id).collection('downloads').add({
      text: 1,

    })
  }
  return (

    <>
     {apps.length === 0?<><h1 className='text-center text-xl font-serif text-gray-800 font-semibold'>No Apps, Please Wait For Some Time </h1></>:<><Slide top>
     {
    Showapp?<View back ={ShowSignleapp} title={appTitle}/>:
    <>
    <div className="md:container-lg md:mx-auto h-auto p-1 mb-2  ">
  
      {/*  */}
      <div className="flex">
        <div className="container ">
          <p className="mx-2 mt-1  font-serif text-xl font-bold  underline"> Latest Apps</p>
        </div>
        <div className="container ">
          {/* <p className="mx-3  font-serif text-2xl font-bold  text-right" onClick={props.changeState}> Back</p>
   */}
          <Link href="/"><a>  <button className="p-1 mx-1 md:mx-3 sm:mx-3 mt-1 px-2  flex items-center justify-center rounded-md bg-black text-white float-right font-serif"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
          </svg>Back</button></a></Link>
        </div>
      </div>
      <div className="sm:grid md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-12 md:space-x-5 lg:space-x-0  lg:py-1 lg:px-7  ">
        {/* fetch start */}
        {
          apps.map((i, index) => (
            
            <div className="h-auto lg:w-60  my-4 md:my-3  sm:my-2 mx-2 lg:mx-3  cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg  " key={index}>
  <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
   <a onClick={() => ShowSignleapp(`${i.id}`)}><Image src={i.Image1} alt={i.Appname} className=" object-contain  group-hover:opacity-75 rounded-lg" height={300} width={520} layout='responsive' /></a>
   </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">{i.Appname}</p>
            </div>
            <div className="flex  sm:flex-row justify-between ">
           <a  onClick={() => ShowSignleapp(`${i.id}`)}> <Itemicons Icon={ViewGridIcon} /></a>
            <a href={i.Apk_File} onClick={()=>Appdownload(`${i.id}`)}><Itemicons Icon={DownloadIcon} /></a>
            </div>
          </div>

        </div>
       
       ))}
       {/* fetch en */}


      </div>

    </div>
    
    </>}
    
    
    </Slide></>}
    <Footer />
    </>


  )
  
}
