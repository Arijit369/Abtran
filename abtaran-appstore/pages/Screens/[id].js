import { useState, useEffect } from "react"
import Slide from 'react-reveal/Slide'
import Footer from '../../Components/Footer'

import { useRouter } from "next/router"
// import { db , serverTimestamp } from "../../firebase";
import { db } from "../../firebase"
import Image from 'next/image'

export default function Viewpage({ app, user, allComments, alldownloads, alllikes }) {
  const router = useRouter()
  const { id } = router.query
  const [AllComments, setAllComments] = useState(allComments)
  const [myComment, setMyComment] = useState('')
  const [Email, setEmail] = useState('')
  const [Alldownloads, setAlldownloads] = useState(alldownloads)
  const [Alllikes, setAlllike] = useState(alllikes)
  // varibles for alerts
  const [Alert, setAlert] = useState('')
  const [alert, setalert] = useState('')
  const Approve = async () => {
    if (!Email || !myComment) {
      setalert('Please Enter All Fields ! Fields Cannot Be Empty')

    } else {
      await db.collection('Approved').doc(id).collection('comments').add({
        text: myComment,
        email: Email

      })
      // window.alert("comment added")
      setAlert('Comment Added ! thankyou For Your Valuable Like ')

      const commentQuery = await db.collection('Approved').doc(id).collection('comments').get()
      setAllComments(commentQuery.docs.map(docSnap => docSnap.data()))
    }
  }
  // downloads

  const Download = async () => {
    await db.collection('Approved').doc(id).collection('downloads').add({
      text: 1,

    })

    const download = await db.collection('Approved').doc(id).collection('downloads').get()
    setAlldownloads(download.docs.map(docSnap => docSnap.data()))

  }
  const Likes = async () => {
    await db.collection('Approved').doc(id).collection('Likes').add({
      text: 1,

    })
    setAlert("Thankyou For Valuable Like")

    const like = await db.collection('Approved').doc(id).collection('Likes').get()
    setAlllike(like.docs.map(docSnap => docSnap.data()))

  }
  return (
    <div>
      {/* alert */}
      {Alert ?
         

        <div class="bg-blue-100 border border-blue-400 text-red-700 px-4 py-3 rounded relative text-center font-serif text-2xl" role="alert">
        <strong class="font-bold">Hi user! </strong>
        <span class="block sm:inline"> {Alert}.</span>
        
      </div> :
        <></>


      }
      {/* alert end */}
{/* downloads */}
{/* comments */}
<Slide left>
      <div className="  flex lg:flex-row flex-col  lg:p-10 md:p-8 sm:p-5 p-4  justify-between gap-5">
     
        <div className="comments p-2 lg:w-4/12 my-1  overflow-y-auto h-40 rounded-md shadow-md bg-gradient-to-br from-yellow-400 to-red-500 ">
          <h5 className="text-center font-serif font-bold text-2xl my-1 flex gap-2 justify-center bg-white p-1 rounded-md">Total Comments<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg></h5>
          <h6 className="font-sans font-semibold text-center lg:mx-7 mx-2 my-5 text-3xl flex gap-2 text-gray-200 justify-center ">{AllComments.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg></h6>
         
        </div>
      
        {/* likes */}
        <div className="comments p-2 lg:w-4/12 my-1  overflow-y-auto  rounded-md shadow-md bg-gradient-to-br from-pink-500 to-red-500  ">
          <h5 className="text-center font-serif font-bold text-2xl my-1 flex gap-2  justify-center p-1 bg-white  rounded-md">Total Downloads<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg></h5>



          <h6 className="font-sans font-semibold text-center lg:mx-7 mx-2 my-5 text-gray-200 text-3xl flex gap-2 justify-center">{Alldownloads.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg></h6>

        </div>
        {/* likes */}

        {/* dowloads */}
        <div className="comments p-2 lg:w-4/12   overflow-y-auto  rounded-md shadow-md bg-gradient-to-b from-indigo-400 to-purple-700 ">
          <h5 className="text-center font-serif font-bold text-2xl my-1 flex gap-2 justify-center bg-white p-1 rounded-lg">Total Likes<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg></h5>

          <h6 className="font-sans font-semibold text-center text-gray-200 lg:mx-7 mx-2 my-5 text-3xl flex gap-2 justify-center ">{Alllikes.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg></h6>
        </div>
        {/* dlownloads */}
      </div>
      </Slide>
{/* downloads */}
  
   <div className="   flex justify-around lg:flex-row flex-col  gap-2">
        {/* images block */}
        <Slide up>
        <div className=" p-2 lg:w-2/6  rounded-r-xl">
          <a href={app.Image1}><Image className="rounded object-center object-cover   hover:scale-125 "
            src={app.Image1}

            alt={app.Image1}
            height="330"
            width="590"
          ></Image></a>
          <a href={app.Image2}><Image className="rounded object-center object-cover   hover:scale-125 "
            src={app.Image2}

            alt={app.Image2}
            height="330"
            width="590"
          ></Image></a>
        </div>
        </Slide>
        {/* appname and others Block */}
        <Slide down>
          
        <div className="bg-white p-2 lg:w-2/6 lg:h-96 lg:mt-10 mt-1 rounded-lg shadow-lg ">
          <h1 className="text-center p-3 text-gray-800 font-serif font-bold text-3xl underline">{app.Appname}</h1>
          <h1 className="flex  flex-col text-center justify-center px-3 my-1 text-gray-500  font-bold text-xl font-serif ">PostedBy:{app.Name}</h1>
          <h1 className="text-center px-3 my-1 text-gray-500 font-mono font-bold text-sm  ">Uploaded On:{app.UpdatedAt}</h1>
          {/* like and comments */}
          {user ? <><h1 className="text-center font-mono font-bold  text-2xl my-7 ">you  cannot download or comment on apps</h1>
          </> : <><div className="container  flex   items-center justify-between mx-auto  my-10  p-2">


            <a href={app.Apk_File}> <button onClick={Download} className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 font-serif px-2 lg:mx-6 md:mx-10 rounded flex justify-center">
              Download &nbsp;<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button></a>
            <button onClick={Likes} className=" hover:text-blue-500 font-serif text-green-500 hover:animate-bounce font-bold  lg:mx-4 md:mx-10 ml-4  rounded flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </button>

          </div>
            {alert ? <h1 className="text-red-900 font-serif text-center">{alert}</h1> : <></>}
            <div className=" flex flex-row gap-3 my-10 p-2 justify-between  ">
              <div className="md:w-1/4 mx-1">
                <input value={Email}
                  onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" placeholder="Email Address" />
              </div>
              <div className="md:w-2/4 mx-1">
                <input value={myComment}
                  onChange={(e) => setMyComment(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Add Comment Here" />
              </div>
              <button onClick={Approve} className="bg-blue-500 font-serif hover:bg-blue-700 text-white font-bold py-2 px-2  rounded flex">
                submit
              </button><br />

            </div></>}
        </div>
        </Slide>
        {/* privacy policy and description block */}
    <Slide right>
        <div className="bg-white p-3  lg:w-2/6 rounded-lg overflow-y-auto   ">
        <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-3xl "><strong className="font-serif">Version:</strong>{app.version}</h1>
          <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-xl "><strong className="font-serif">Description:</strong>{app.Description}</h1>
          <h1 className=" my-5 text-gray-800 font-sans  text-sm  "><strong>Privacy & Policy:</strong><a className="underline text-blue-500" href={app.Privacy}>{app.Privacy}</a></h1>
        </div>
        </Slide>
      </div>

      
      {/* comments */}
      <Slide right>
      <div className="  flex justify-center items-center lg:flex-row flex-col   lg:p-10 md:p-8 sm:p-5 p-4  ">
         <div className="bg-white h-44 lg:w-1/2  p-2 overflow-y-auto rounded-xl  bg-gradient-to-t from-[#06202a] to-blue-400">
         <h5 className="text-center font-serif bg-white font-bold text-2xl my-1 flex gap-2 justify-center  p-1 rounded-md">Total Comments {AllComments.length} <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg></h5>
          
          {AllComments.map((item, index) => (

            <h6 key={index} className="font-sans font-semibold text-center text-gray-200 lg:mx-7 mx-2 my-1 text-md"> {item.text} </h6>
          ))}
         </div>
      </div>
      </Slide>
        <Footer/>

      {/* if user agein logged in ends here */}
      {/* others */}
      
    </div>
  )
}
export async function getServerSideProps({ params: { id } }) {
  const result = await db.collection('Approved').doc(id).get()
  //  for comments
  const allCommetsSnap = await db.collection('Approved').doc(id).collection('comments').get()

  const allComments = allCommetsSnap.docs.map(comDocSnap => comDocSnap.data())
  // downloads
  const alldownloadsSnap = await db.collection('Approved').doc(id).collection('downloads').get()

  const alldownloads = alldownloadsSnap.docs.map(comDocSnap => comDocSnap.data())
  // likes
  const alllikesSnap = await db.collection('Approved').doc(id).collection('Likes').get()

  const alllikes = alllikesSnap.docs.map(comDocSnap => comDocSnap.data())

  return {
    props: {

      app: {
        ...result.data(),
        UpdatedAt: result.data().UpdatedAt.toDate().toDateString()
      },
      allComments,
      alldownloads,
      alllikes,
    },
  }
}


