import Slide from 'react-reveal/Slide'
import  Flip from 'react-reveal/Flip';
import { useEffect,useState  } from 'react'

import Image from 'next/image'
import { db } from '../../../firebase';

export default function Ana({ user }) {
    const [loading, setLoading] = useState('');
  const [apps, setApps] = useState([]);
  const [Warning , setwarning]=useState('')
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
            <Slide top><div className="container text-white bg-gradient-to-br from-[#06202a] to-blue-400   font-serif text-lg lg:text-xl md:text-xl font-semibold p-5 uppercase flex flex-row justify-center "><h1>Welcome {user.displayName}</h1></div></Slide>
            <div className="container  flex lg:flex-row md:flex-row flex-col justify-center lg:gap-5 gap-3 p-3 ">
                 <Slide left>
                 <Flip x>
                <div className="h-64 lg:w-96 md:w-96 w-full bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl shadow-xl p-5">
                <h1 className='text-2xl text-center font-serif font-semibold text-white my-3 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg> Your Details</h1>
                   <h1 className='uppercase text-xl text-center font-serif font-semibold text-white my-9'>{user.displayName}</h1>
                   <h1 className='text-xl text-center  font-serif font-semibold text-white my-9'>{user.email}</h1>
                </div>
                </Flip>
                </Slide>
               
                <Slide right>
                <div className="h-64 lg:w-1/2 md:w-1/2 w-full  bg-gradient-to-t from-[#06202a] to-blue-400  rounded-xl shadow-xl p-5 overflow-auto scrollbar-hide">
                <h1 className='text-2xl text-center font-serif font-semibold text-gray-100 my-3 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
</svg> Uploads Images</h1>
{
 apps.map((i, index) => (<div className='my-2' key={index}>
 <Image className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-125"
    src={i.Image1}
   
    alt="..."
  height="400"
  width="590"
  ></Image>
 
 </div> ))} 

                </div>
                </Slide>



            </div>
            <div className="container  flex lg:flex-row md:flex-row flex-col justify-center lg:gap-5 gap-3 p-3 ">
            <Slide top>
               <Flip x>
                <div className="h-64 lg:w-96 md:w-96 w-full bg-gradient-to-br from-pink-500 to-red-500 rounded-xl shadow-xl p-5 overflow-auto">
                <h1 className='text-2xl text-center font-serif font-semibold text-gray-100 my-1 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
</svg>  Total Uploads </h1> 

 <h1 className='text-2xl text-center font-serif font-semibold text-white my-12 flex flex-row justify-center'>{apps?<>{apps.length}</>:<>{loading}</>} Uploads </h1>
                </div>
                </Flip>
                </Slide>
                <Slide bottom>
               
                <div className="h-64 lg:w-1/2 md:w-1/2 w-full bg-gradient-to-b from-indigo-400 to-purple-700 rounded-xl shadow-xl p-5 overflow-auto scrollbar-hide">
                <h1 className='text-2xl text-center font-serif font-semibold text-gray-100 my-3 flex flex-row justify-center'> <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
</svg> Uploads Name</h1> 
{
 apps.map((i, index) => (<div key={index}>
 <h1 className='text-2xl text-center font-serif font-semibold text-white my-2 flex flex-row justify-center'>{i.Appname}</h1>
 
 </div> ))}
                </div>
                
                </Slide>



            </div>
        </div>
    )
}
