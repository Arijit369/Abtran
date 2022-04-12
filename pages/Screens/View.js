import { useState, useEffect } from "react"
import Slide from 'react-reveal/Slide'

import validator from 'validator'
import { useRouter } from "next/router"
// import { db , serverTimestamp } from "../../firebase";
import { db, serverTimestamp } from "../../firebase"

export default function View(props) {

  const router = useRouter()

  const [double, setDouble] = useState(false);
  const { id } = router.query
  const [AllComments, setAllComments] = useState([])
  const [myComment, setMyComment] = useState('')
  const [Email, setEmail] = useState('')
  const [Alldownloads, setAlldownloads] = useState("")
  const [Alllikes, setAlllike] = useState("")
  // varibles for alerts
  const [Alert, setAlert] = useState('')
  const [alert, setalert] = useState('')
  const [load, setload] = useState(false)
  const [executing, setExecuting] = useState(false);
  // get data
  const [datetime, sett] = useState('')

  const [loading, setLoading] = useState(true);
  const [app, setApps] = useState('');
  const loadcoments = async () => {
    const comments = await db.collection('Approved').doc(`${props.title}`).collection('comments').orderBy('time', 'desc').get()
    setAllComments(comments.docs.map(docSnap => docSnap.data()));
    const download = await db.collection('Approved').doc(`${props.title}`).collection('downloads').get()
    setAlldownloads(download.docs.map(docSnap => docSnap.data()))
    const like = await db.collection('Approved').doc(`${props.title}`).collection('Likes').get()
    setAlllike(like.docs.map(docSnap => docSnap.data()))
  };
  useEffect(() => {
    
    loadcoments();
    db.collection("Approved").doc(`${props.title}`)

      .get().then((doc) => {
        if (doc.exists) {
          // Convert to City object
          var app = doc.data();
          // Use a City instance method
          setApps(app);
          sett(app.UpdatedAt.toDate().toDateString())

        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
     

  }, [app, props.title]);

  // download the app

  const Approve = async () => {

    if (!Email || !myComment) {
      setalert(' Fields Cannot Be Empty ')

    } else if (validator.isEmail(Email)) {
      await db.collection('Approved').doc(`${props.title}`).collection('comments').add({
        text: myComment,
        email: Email,
        time: serverTimestamp()
      })
      // window.alert("comment added")
      window.alert('Comment Added ! thank you For Your Valuable Like ')
      window.location.reload(false);
      const commentQuery = await db.collection('Approved').doc(`${props.title}`).collection('comments').get()
      setAllComments(commentQuery.docs.map(docSnap => docSnap.data()))
    }


    else {
      setalert("Enter Valid Email")

    }
  }
  // downloads

  const Download = async () => {
    await db.collection('Approved').doc(`${props.title}`).collection('downloads').add({
      text: 1,
      time: serverTimestamp()

    })

    const download = await db.collection('Approved').doc(`${props.title}`).collection('downloads').get()
    setAlldownloads(download.docs.map(docSnap => docSnap.data()))

  }
  const Likes = async () => {
    await db.collection('Approved').doc(`${props.title}`).collection('Likes').add({
      text: 1,
      time: serverTimestamp()
    })
    window.alert('Dear User, Thank You For Your Valuable Like')
    setDouble(true);
    const like = await db.collection('Approved').doc(`${props.title}`).collection('Likes').get()
    setAlllike(like.docs.map(docSnap => docSnap.data()))

  }
  return (
    <div>
      <div className="font-sans bg-cover bg-no-repeat w-full h-auto">
    
        <div className="bg-white bg-opacity-95">
    
          <Slide top>
            <div className=' lg:px-5  px-1 py-2 flex flex-row justify-center gap-2 '>
              <h1 className="text-2xl underline font-serif font-semibold p-2 rounded-md shadow-md head  text-white text-center">{app.Appname}</h1>

            </div>
            <Slide bottom>
            <div className="  flex lg:flex-row flex-col  lg:p-10 md:p-8 sm:p-5 p-4  justify-between gap-5">

              

              {/* likes */}
              <div className="comments p-2 lg:w-4/12 my-1  overflow-y-auto  rounded-md shadow-md bg-gradient-to-br from-pink-500 to-red-500  ">
              <a href={app.Apk_File}><button  onClick={Download} className="text-center font-serif font-bold text-2xl my-1 w-full flex gap-2 justify-center bg-white p-1 rounded-lg hover:bg-green-600 hover:text-white">Download<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg></button></a>

                <h6 className="font-sans font-semibold text-center lg:mx-7 mx-2 my-5 text-gray-200 text-3xl flex gap-2 justify-center">{Alldownloads.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg></h6>



              </div>
              {/* likes */}
              

              {/* dowloads */}
              <div className="comments p-2 lg:w-4/12   overflow-y-auto  rounded-md shadow-md bg-gradient-to-b from-indigo-400 to-purple-700 ">
                <button  onClick={Likes} disabled={double} className="text-center font-serif font-bold text-2xl my-1 w-full flex gap-2 justify-center bg-white p-1 rounded-lg hover:bg-green-600 hover:text-white">Like<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg></button>

                <h6 className="font-sans font-semibold text-center text-gray-200 lg:mx-7 mx-2 my-5 text-3xl flex gap-2 justify-center ">{Alllikes.length}<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg></h6>
              </div>
              {/* dlownloads */}
            </div>
          </Slide>
          </Slide>
          <Slide bottom>
            {/* image and discripotion container */}
            <div className=" lg:p-5 p-1 flex lg:flex-row flex-col justify-between gap-2 ">
              <div className="lg:w-1/2 flex lg:flex-row flex-col p-2 lg:gap-5 gap-2 justify-center items-center">
                <div className=" mt-1 flex justify-center items-center  ">
                  <a href={app.Image1} target="_blank"><img className="lg:h-96 h-1/2 object-contain hover:scale-105" src={app.Image1}></img></a>
                </div>
                <div className=" mt-1 flex justify-center items-center ">
                  <a href={app.Image2} target="_blank"><img className="lg:h-96 h-96 w-full object-contain hover:scale-105" src={app.Image2}></img></a>
                </div>
              </div>
              <div className="lg:w-1/2 ">
                <Slide top>
                  <div className="bg-white p-3 shadow-lg  rounded-lg overflow-y-auto h-96  lg:my-10   ">
                    <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-lg font-bold "><strong >Published By: </strong>{app.Name}</h1>
                    <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-md "><strong >Email: </strong>{app.Email}</h1>
                    <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-md "><strong >Description: </strong>{app.Description}</h1>
                    <h1 className="px-3 py-3 text-gray-800 font-sans  text-sm  "><strong>Privacy & Policy: </strong><a target='_blank' className="underline text-justify text-blue-500" href={app.Privacy}>View Privacy</a></h1>

                    <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-sm font-bold "><strong >Published On: </strong>{datetime}</h1>

                    <h1 className="text-justify px-3 py-3 text-gray-800 font-serif text-sm "><strong >Version: </strong>{app.version}</h1>
                  </div>
                </Slide>
              </div>
            </div>
            {/* description container ends */}
          </Slide>
          {/* download and others */}

          <Slide top>
            <div className=" flex lg:flex-row flex-col  lg:p-10 md:p-8 sm:p-5 p-4  justify-between gap-5">
              <div className="bg-white h-60 lg:w-4/12  p-2 overflow-y-auto rounded-xl  bg-gradient-to-br from-yellow-300 to-red-400">
                <h5 className="text-center font-serif bg-white font-bold text-2xl my-1 flex gap-2 justify-center  p-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg></h5>
                {props.user ? <><h1 className="text-white text-center font-mono font-semibold my-5">You cannot download and like app</h1></> : <>
                  <div className="  my-9 p-2 flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                    <a href={app.Apk_File}> <button onClick={Download} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 font-serif px-2 lg:mx-6 md:mx-10 rounded flex justify-center">
                      Download <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button></a>
                    <h1 className="text-white font-serif text-xl text-center">{Alldownloads.length} Downloads</h1>
                    </div>
                    {/* <button onClick={Likes} disabled={double} className=" hover:text-red-700 font-serif text-white  font-bold  lg:mx-4 md:mx-10 ml-4  rounded flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </button> */}
                     <div className="flex flex-col gap-2">
                     <button onClick={Likes} disabled={double} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 font-serif px-2 lg:mx-6 md:mx-10 rounded flex justify-center">
                      Like <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </button>
                    <h1 className="text-white font-serif text-xl text-center">{Alllikes.length} Likes</h1>
                    </div>
                  </div></>}
              </div>
              {/* add comments */}
              <div className="bg-white h-60 lg:w-4/12  p-2  rounded-xl  bg-gradient-to-b from-indigo-400 to-purple-700">
                <h5 className="text-center font-serif bg-white font-bold text-2xl my-1 flex gap-2 justify-center  p-1 rounded-md">Add Comments<svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg></h5>


                {props.user ? <><h1 className="text-white  text-center font-mono font-semibold ">You cannot comment on this app</h1></> : <>
                  {alert ? <h1 className="text-white  text-center">{alert}</h1> : <></>}
                  <div className=" flex flex-col gap-4 justify-between  lg:px-5 px-1 ">
                    <div className="mx-1">
                      <input value={Email}
                        onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" required placeholder="Email Address" />
                    </div>
                    <div className="mx-1">
                      <input value={myComment}
                        onChange={(e) => setMyComment(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Add Comment Here" />
                    </div>
                    <button onClick={Approve} className="bg-red-500 mx-1 font-serif hover:bg-blue-700 text-white font-bold w-28 p-1 rounded">
                      submit
                    </button><br />

                  </div>
                </>}

              </div>
              {/* add comments ends */}
              <div className="bg-white h-60 lg:w-4/12  p-2 overflow-y-auto rounded-xl  bg-gradient-to-br from-yellow-400 to-red-500">
                <h5 className="text-center font-serif bg-white font-bold text-2xl my-1 flex gap-2 justify-center  p-1 rounded-md">Total Comments {AllComments.length} <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg></h5>

                {AllComments.map((item, index) => (

                  <h6 key={index} className="font-sans font-semibold text-center text-gray-200 lg:mx-7 mx-2 my-1 text-md"> {item.text} </h6>
                ))}
              </div>
            </div>
          </Slide>
          {/* downloads and other ends */}
          {/* likes and comments and others */}
          
        </div>
      </div>
      {/* likes ends */}
    </div>

  )
}
