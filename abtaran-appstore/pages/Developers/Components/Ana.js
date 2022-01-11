import Slide from 'react-reveal/Slide'
import Flip from 'react-reveal/Flip';
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { db } from '../../../firebase';

export default function Ana({ user }) {
  const [loading, setLoading] = useState('');
  const [apps, setApps] = useState([]);
  const [Warning, setwarning] = useState('')
  const currentUserId = user ? user.uid : null;
  useEffect(() => {
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
    setLoading('Lodaing Please wait')
      ;
  }
  return (
    <div>
<Slide top><div className="lg:container lg:sticky lg:top-28  z-20 md:container text-white nv bg-opacity-90   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {user.displayName}</h1></div></Slide>
      <div className="lg:container md:container  flex lg:flex-row md:flex-row flex-col justify-center lg:gap-5 gap-3 p-3 ">
        <Slide left>
        <div className='h-64 p-2 lg:w-96 md:w-96 w-full rounded-xl shadow-lg '>
          <div className='h-20 bg-gradient-to-br from-yellow-400 to-red-400 rounded-md w-full flex justify-center'>
            <h1 className='text-2xl text-center font-serif font-semibold text-white my-5 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg> Your Details</h1>
          </div>
          <h1 className='uppercase text-xl text-center font-serif font-semibold  my-9'>{user.displayName}</h1>
          <h1 className='text-lg text-center  font-serif font-semibold my-9'>{user.email}</h1>
        </div>
        </Slide>
        <Slide right>
        <div className="h-64 px-2  lg:w-1/2 md:w-1/2 w-full rounded-xl shadow-xl  overflow-auto scrollbar-hide">
          <div className='h-20 sticky top-0 z-20   bg-gradient-to-bl from-[#0a2a36] to-blue-400 rounded-b-md w-full flex justify-center'>
            <h1 className='text-2xl text-center font-serif font-semibold text-gray-100 my-5 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg> Uploads Images</h1>
          </div>
          {apps ? <>  {
            apps.map((i, index) => (<div className='my-2' key={index}>
              <Image className="h-40 rounded w-full  object-center mb-3 "
                src={i.Image1}

                alt="..."
                height="300"
                width="590"
              ></Image><hr className='my-2' />

            </div>))}</> : <>Loadin Please wait</>}
        </div>
        </Slide>



      </div>
      {/* row 2 */}
      <div className="lg:container md:container  flex lg:flex-row md:flex-row flex-col justify-center lg:gap-5 gap-3 p-3 ">
     
      <Slide bottom>
        <div className="h-64 lg:w-1/2 md:w-1/2 w-full rounded-xl shadow-xl px-2 overflow-auto scrollbar-hide">
          <div className='h-20 sticky top-0 z-20   bg-gradient-to-br from-purple-400 to-indigo-700 rounded-b-md w-full flex justify-center'>
            <h1 className='text-2xl text-center font-serif font-semibold text-gray-100 my-5 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg> Uploads Name</h1>
          </div>
          {
            apps.map((i, index) => (<div key={index}>
              <h1 className='text-2xl text-center font-serif font-semibold text-gray-900 my-2 flex flex-row justify-center'>{i.Appname}</h1><hr />

            </div>))}
        </div>
        </Slide>
     
     
        <Slide top>
        <div className='h-64 p-2 lg:w-96 md:w-96 w-full rounded-xl shadow-lg '>
          <div className='h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-md w-full flex justify-center'>
            <h1 className='text-2xl text-center font-serif font-semibold text-gray-100 my-5 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>  Total Uploads </h1>
          </div>
          <h1 className='text-2xl text-center font-serif font-semibold text-gray-900 my-12 flex flex-row justify-center'>{apps ? <>{apps.length}</> : <>{loading}</>} Uploads </h1>
        </div>
        </Slide>
        



      </div>
    </div>
  )
}
