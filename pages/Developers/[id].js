import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Slide from 'react-reveal/Slide'
import { db } from "../../firebase"
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../../Components/Footer"
export default function Anal({  user }) {
  const router = useRouter()
  const { id } = router.query
  const [AllComments, setAllComments] = useState([])
  const [myComment, setMyComment] = useState('')
  const [Alldownloads, setAlldownloads] = useState([])
  const [Alllikes, setAlllike] = useState([])
  const [app , setapp]=useState([])
  const[datetime , sett]=useState('')
  // downloads

  const loadnews = async () => {
    try {
      const docRef = db.collection("Approved").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setapp(result.data());
        sett(result.data().UpdatedAt.toDate().toDateString())
      } else {
        console.log("no Document Found");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  const loadcoments = async () => {
    const comments = await db.collection('Approved').doc(id).collection('comments').get()
    setAllComments(comments.docs.map(docSnap => docSnap.data()));
    const download = await db.collection('Approved').doc(id).collection('downloads').get()
    setAlldownloads(download.docs.map(docSnap => docSnap.data()))
    const like = await db.collection('Approved').doc(id).collection('Likes').get()
    setAlllike(like.docs.map(docSnap => docSnap.data()))
  };
  useEffect(() => {
  loadnews();
  loadcoments();
  },)
  

  return (
    <div>

      <h1 className="text-center my-3 text-2xl font-serif font-bold"> Analytics For App {app.Appname}</h1>

      <div className="container mx-auto my-5 py-1 lg:px-12 px-2 flex gap-5 flex-col lg:flex-row  ">

        <div className="lg:w-1/2 my-3  ">

          <Slide top>
          <div className=" mt-1 flex justify-center items-center ">
           <a href={app.Image1} target="_blank"><img className="h-96 object-center hover:scale-105" src={app.Image2}></img></a>
           </div>
          
            </Slide>
          {/* <div className=" h-24"></div> */}

        </div>
        <div className=" lg:w-1/2 sm:max-w-full  rounded-xl  ">

          <h1 className="text-center p-3 text-gray-800 font-serif font-bold text-3xl underline">{app.Appname}</h1>
          <h1 className="text-center px-3 my-1 text-gray-800 font-mono font-bold text-xl ">Category :- {app.Category}<br/>PostedBy : {app.Name}</h1>
          <h1 className="text-center px-3 my-1 text-gray-800 font-mono font-bold text-xl ">Date:{datetime}</h1>
          <Slide bottom><div className=" mt-12 flex lg:flex-row flex-col bg-[#06202a]  lg:p-10 md:p-8 sm:p-5 p-4 rounded-md bg-opacity-90 ">
            <div className="comments p-2 lg:w-4/12 my-1  mx-3 overflow-y-auto h-40 rounded-md shadow-md bg-red-200  ">
              <h5 className="text-center font-serif font-bold text-md my-1 flex gap-2 justify-center bg-red-50 p-1 rounded-md">Total Comments<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg></h5>

              <Slide right><h6 className="font-sans font-semibold text-center lg:mx-7 mx-2 my-5 text-3xl flex gap-2 justify-center">{AllComments.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg></h6></Slide>

            </div>
            {/* likes */}
            <div className="comments p-2 lg:w-4/12 my-1 mx-3 overflow-y-auto  rounded-md shadow-md bg-white  ">
              <h5 className="text-center font-serif font-bold text-md my-1 flex gap-2 justify-center bg-blue-50 p-1 rounded-md">Total Downloads<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg></h5>



              <h6 className="font-sans font-semibold text-center lg:mx-7 mx-2 my-5 text-2xl flex gap-2 justify-center">{Alldownloads.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg></h6>

            </div>
            {/* likes */}

            {/* dowloads */}
            <div className="comments p-2 lg:w-4/12 my-1  mx-3 overflow-y-auto  rounded-md shadow-md bg-green-200 ">
              <h5 className="text-center font-serif font-bold text-md my-1 flex gap-2 justify-center bg-gray-50 p-1 rounded-lg">Total Likes<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg></h5>

              <h6 className="font-sans font-semibold text-center lg:mx-7 mx-2 my-5 text-3xl flex gap-2 justify-center ">{Alllikes.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg></h6>
            </div>
            {/* dlownloads */}
          </div></Slide>
          {/* if there is any user */}

          {/* user suthentication ends here */}
        </div>



      </div>

      <div className="p-5 flex justify-center">
        <Link href="/Developers/Dashboard"><a><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
          Back To Dashboard<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
          </svg>
        </button></a></Link>
      </div>

      <Footer/>
      {/* if user agein logged in ends here */}
    </div>
  )
}
// export async function getServerSideProps({ params: { id } }) {
//   const result = await db.collection('Approved').doc(id).get()
//   //  for comments
//   const allCommetsSnap = await db.collection('Approved').doc(id).collection('comments').get()

//   const allComments = allCommetsSnap.docs.map(comDocSnap => comDocSnap.data())
//   // downloads
//   const alldownloadsSnap = await db.collection('Approved').doc(id).collection('downloads').get()

//   const alldownloads = alldownloadsSnap.docs.map(comDocSnap => comDocSnap.data())
//   // likes
//   const alllikesSnap = await db.collection('Approved').doc(id).collection('Likes').get()

//   const alllikes = alllikesSnap.docs.map(comDocSnap => comDocSnap.data())
//   return {
//     props: {

//       app: {
//         ...result.data(),
//         UpdatedAt: result.data().UpdatedAt.toMillis()
//       },
//       allComments:JSON.parse(JSON.stringify(allComments)),
//       alldownloads:JSON.parse(JSON.stringify(alldownloads)),
//       alllikes:JSON.parse(JSON.stringify(alllikes)),
//     },
//   }
// }


