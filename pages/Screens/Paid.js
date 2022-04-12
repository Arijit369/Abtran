import Image from 'next/image'
import { db, serverTimestamp } from '../../firebase'
import { useEffect, useState } from 'react'
import { DownloadIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Itemicons from '../../Components/Itemicons'
import Slide from 'react-reveal/Slide'
import { useRouter } from 'next/router'
import Footer from '../../Components/Footer';
export default function ({ user }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
            .collection("Paidapps").orderBy("UpdatedAt", "desc")
            // .collection("Approved").where("Category",'==',props.filtername)
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
        return <div className="h-full p-5 flex justify-center"><p className='text-center text-xl font-serif font-bold tracking-widest'>Please Wait Loading Content</p></div>
            ;
    }
    // download the app

    const Appdownload = async (id) => {
        await db.collection('Approved').doc(id).collection('downloads').add({
            text: 1,
            time: serverTimestamp()
        })
    }
    return (
        <><div>
            <nav className="sticky  nv bg-opacity-90 w-full z-10   ">
                <div className="flex p-1  gap-3 text-lg  flex-row justify-between ">

                    {/* <h2 onClick={openNav} className=" nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><MenuIcon className='h-7' />Browse</h2> */}
                    <h2 onClick={() => router.push('/Screens/Paid')} className="border-2 border-white px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row">Home</h2>

                    <h2 onClick={() => router.push('/Screens/Cart')} className=" border-2 border-white px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row">My Cart</h2>
                    <h2 onClick={() => router.push('/Screens/Orders')} className=" border-2 border-white px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row">My Orders</h2>

                </div>

            </nav>
            <div className=" h-auto p-1 mb-2  bg-gray-100  bg-opacity-50 ">
                {/* <p className="mx-2 font-serif text-2xl font-bold  underline">{props.filtername}</p>
             */}
                {apps.length === 0 ? <><h1 className='text-center text-xl font-serif text-gray-800 font-semibold'>No Apps, Please Wait For Some Time </h1></> : <>
                    <Slide down>
                        <div className="flex">
                            <div className="container ">
                                <p className="mt-2 mx-1  font-serif text-xl font-bold  underline"> {apps.App}</p>
                            </div>
                            <div className="container ">
                                {/* <p className="mx-3  font-serif text-2xl font-bold  text-right" onClick={props.changeState}> Back</p>
         */}
                                <button onClick={() => router.push('/')} className="p-1 hover:animate-bounce  md:mx-3  mx-2 sm:mx-3 mt-1 px-2  flex items-center justify-center rounded-md bg-black text-white float-right font-serif" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                                </svg>&nbsp;Back</button>
                            </div>
                        </div>
                        <div className="sm:grid md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg:gap-12 md:space-x-5 lg:space-x-0  lg:py-1 lg:px-7  ">
                            {/* fetch start */}
                            {
                                                 apps.map((i, index) => (
                                  <>
                                  {i.status=="Active" ?<>
                                    <div className="h-auto lg:w-60  my-4 md:my-3  sm:my-2 mx-2 lg:mx-3  cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg  " key={index}>
                                        <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                            <Image src={i.Image1} alt={i.Appname} className=" object-contain  group-hover:opacity-75 rounded-lg" height={310} width={550} layout='responsive' />
                                        </div>

                                        <div className="links rounded-b-lg">
                                            <div className=" flex  sm:flex-row justify-between px-2">
                                                <p className=" font-serif text-lg font-bold ">{i.Appname}</p>
                                                <p className=" font-serif text-lg font-bold ">{i.Price}</p>
                                            </div>
                                            <div className="flex  sm:flex-row justify-center ">
                                                {/* buy now button */}
                                                <a href={`/More/${i.id}`}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
                                                    Buy App
                                                </button></a>

                                            </div>
                                        </div>

                                    </div>
</>:<></>}
                                  </>
                                ))}
                            {/* fetch en */}


                        </div>
                    </Slide></>}
            </div>



        </div><Footer /></>
    )
}
