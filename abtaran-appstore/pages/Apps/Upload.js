import { useState, useEffect } from 'react'

import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import { db, serverTimestamp, storage } from '../../firebase'


export default function Upload({ user }) {
  const [alert, setalert] = useState('')

  // varialbles for app upload
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [version, setversion] = useState('');
  const [progress, setprogress] = useState(0);
  // variables for apps ends
  // varialbles for image upload
  const [image1, setImage1] = useState(null);
  const [url1, setUrl1] = useState('');
  const [progress1, setprogress1] = useState(0);
  // variables for image ends
  // varialbles for image upload
  const [image2, setImage2] = useState(null);
  const [url2, setUrl2] = useState('');
  const [progress2, setprogress2] = useState(0);
  // variables for image ends
  //  variables for desc
  const [appname, setappname] = useState('')
  const [desc, setdesc] = useState('')
  const [category, setcategory] = useState('')
  const [privacy, setprivacy] = useState('')
  const [Marketing, setMarketing] = useState('')
  // variables for desc
  //  app upload starts
  const handelChange = (e) => {

    if (e.target.files[0]) {
      setImage(e.target.files[0]);

    }
  };
  const handelUpload = () => {
    console.log("uploading")

    const uplaodTask = storage.ref(`Apps/${image.name}`).put(image);
    uplaodTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprogress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage.ref("Apps")
          .child(image.name)
          .getDownloadURL()
          .then(url => {

            setUrl(url)
            console.log(url, 'url')
          })
      }
    );
  };
  // app upload ends
  //   image upload starts
  const handelChange1 = (e) => {
    console.log()
    if (e.target.files[0]) {
      setImage1(e.target.files[0]);

    }
  };
  const handelUpload1 = () => {
    console.log("uploading image")

    const uplaodTask = storage.ref(`Images/${image1.name}`).put(image1);
    uplaodTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprogress1(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage.ref("Images")
          .child(image1.name)
          .getDownloadURL()
          .then(url1 => {

            setUrl1(url1)
            console.log(url1, 'url1')
          })
      }
    );
  };
  // image upload ends
  // image2 upload starts
  const handelChange2 = (e) => {
    console.log()
    if (e.target.files[0]) {
      setImage2(e.target.files[0]);

    }
  };
  const handelUpload2 = () => {
    console.log("uploading image2")

    const uplaodTask = storage.ref(`Images/${image2.name}`).put(image2);
    uplaodTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprogress2(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage.ref("Images")
          .child(image2.name)
          .getDownloadURL()
          .then(url2 => {

            setUrl2(url2)
            console.log(url2, 'url2')
          })
      }
    );
  };
  // image2 upload ends
  // upload appps with des c
  const SubmitDetails = async () => {
    if (!category || !appname || !desc || !privacy || !version || !Marketing) {
      setalert('Please Enter All Fields')

    } else {

      try {
        await db.collection('Uploads').add({
          Category: category,
          Appname: appname,
          Description: desc,
          Privacy_Policy: privacy,
          Apk_File: url,
          Image1: url1,
          Image2: url2,
          Version: version,
          Name: user.displayName,
          Marketing: Marketing,
          Userid: user.uid,

          UpdatedAt: serverTimestamp()
        })
        //   M.toast({html: 'Blog Created',classes:"green"}) 
        console.log("app uploaded")
        window.alert(`dear ${user.displayName} app uploaded to abtaran`)
        window.location.reload(false);
      } catch (err) {

        setalert(`dear ${user.displayName} upload failed`)
        // router.push("/Developers/Dashboard")
      }


    }


  }



  return (
    <div>

<Slide top><div className="lg:container lg:sticky lg:top-28  z-20 md:container text-white nv bg-opacity-90   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {user.displayName}</h1></div></Slide>
      <Fade>
        <div className=" container p-2 ">
          <h1 className="text-gray-800 font-bold font-serif italic text-3xl text-center">Upload App From Here</h1>
          {/* form */}
          <div className="  flex justify-center lg:mt-5   ">


            <Slide right>
              <div className=" p-3 mx-1 lg:w-3/4  pt-7 rounded-3xl shadow-xl  ">

                {/* form */}


                {/* upload app */}
                <div className=" flex flex-col sm:flex-row ">

                  <div className="m-1 border-b border-green-900 p-1">
                    <progress value={progress} max="100"> </progress>

                    <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif" >
                      Upload App Apk
                    </label>
                    <input onChange={handelChange} className="appearance-none bg-transparent border-none  text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" id="file" type="file" placeholder="Username" />


                  </div>

                  <button onClick={handelUpload} className=" bg-gradient-to-tr from-blue-500 to-blue-700  hover:scale-105 text-white font-bold py-2 px-2 rounded h-10 mt-1 lg:mt-12 ml-36 flex justify-center w-40">
                    Upload File<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>

                </div>
                {/* upload app ends */}
                {/* upload image */}
                <div className=" flex flex-col sm:flex-row ">

                  <div className="m-1 border-b border-green-900 p-1">
                    <progress value={progress1} max="100"> </progress>

                    <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif" >
                      Upload App Logo
                    </label>
                    <input onChange={handelChange1} className="appearance-none bg-transparent border-none  text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" id="file" type="file" placeholder="App Logo" />


                  </div>

                  <button onClick={handelUpload1} className=" bg-gradient-to-tr from-blue-500 to-blue-700  hover:scale-105 text-white font-bold py-2 px-2 rounded h-10 mt-1 lg:mt-12 ml-36 flex justify-center w-40">
                    Upload Image <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>

                </div>
                {/* upload image */}
                {/* image2 */}
                {/* upload image2 */}
                <div className=" flex flex-col sm:flex-row ">

                  <div className="m-1 border-b border-green-900 p-1">
                    <progress value={progress2} max="100"> </progress>

                    <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif" >
                      Upload App Image
                    </label>
                    <input onChange={handelChange2} className="appearance-none bg-transparent border-none  text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" id="file" type="file" placeholder="App Image" />


                  </div>

                  <button onClick={handelUpload2} className=" bg-gradient-to-tr from-blue-500 to-blue-700  hover:scale-105 text-white font-bold py-2 px-2 rounded h-10 mt-1 lg:mt-12 ml-36 flex justify-center w-40">
                    Upload Image <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>

                </div>
                {/* upload image2 */}
                {/* image2 ends */}
                {/* other data */}
                <Slide top>
                  <div className="p-2 my-2 shadow-lg ">
                    {alert ?
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">{user.displayName} </strong>
                        <span className="block sm:inline">{alert}</span>

                      </div> : <></>}
                    <div className=" flex flex-col sm:flex-row gap-2 ">
                      <div className="px-1 border-b border-green-900 lg:w-1/2">

                        <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif" value={appname} onChange={(e) => setappname(e.target.value)}>
                          App Name
                        </label>
                        <textarea
                          value={appname} onChange={(e) => setappname(e.target.value)}
                          className="form-textarea mt-1 block w-full"
                          rows="3"
                          placeholder="App Name."
                        ></textarea>
                      </div>
                      <div className="px-1 border-b border-green-900 lg:w-1/2">

                        <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif">
                          App Description
                        </label>
                        <textarea
                          value={desc} onChange={(e) => setdesc(e.target.value)}
                          className="form-textarea mt-1 block w-full"
                          rows="3"
                          placeholder="App Description."
                        ></textarea>
                      </div>


                    </div>
                    <div className=" flex flex-col sm:flex-row gap-2 p-2">
                      <div className="px-1 border-b border-green-900 lg:w-1/2">

                        <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif" value={appname} onChange={(e) => setappname(e.target.value)}>
                          Category
                        </label>
                        <div className="relative">
                          <select value={category} onChange={(e) => setcategory(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Select One</option>
                            <option>Shoping</option>
                            <option>Gaming</option>
                            <option>Music</option>
                            <option>Education</option>
                            <option>Entertainment</option>
                            <option>Art</option>
                            <option>Payment</option>
                            <option>Add More Category</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="px-1 border-b border-green-900 lg:w-1/2">

                        <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif">
                          Url Of Privacy Policy
                        </label>
                        <input type="text"
                          value={privacy} onChange={(e) => setprivacy(e.target.value)}
                          className="form-textarea mt-1 block w-full py-1"
                          rows="3"
                          placeholder="Url."
                        ></input>
                      </div>
                      <div className="px-1 border-b border-green-900 lg:w-1/2">

                        <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif">
                          App Version
                        </label>
                        <input type="text"
                          value={version} onChange={(e) => setversion(e.target.value)}
                          className="form-textarea mt-1 block w-full py-1"
                          rows="3"
                          placeholder="App Version."
                        ></input>
                      </div>


                    </div>
                    <div className='my-1 p-1 flex justify-center'>
                      <div className="px-1 border-b border-green-900 lg:w-1/2  ">

                        <label className="block text-gray-700 text-lg font-bold my-1 mx-1 py-1 px-1 font-serif">
                          Do You Want Marketing For this App
                        </label>
                        <div className='relative'>
                          <select value={Marketing} onChange={(e) => setMarketing(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Select One</option>
                            <option>Yes</option>
                            <option>No</option>

                          </select>

                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-1  flex w-full justify-center">
                      <Slide right>
                        <button onClick={SubmitDetails} className="bg-blue-500 hover:bg-blue-600 text-white font-serif font-semibold hover:text-white h-12 mt-10 py-3 border px-3 mx-2 border-blue-500 hover:border-transparent rounded flex">
                          Upload App  &nbsp;<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </button>
                      </Slide>
                    </div>
                  </div>
                </Slide>
                {/* button */}






              </div>
            </Slide>
          </div>





        </div>
      </Fade>
    </div>
  )
}
