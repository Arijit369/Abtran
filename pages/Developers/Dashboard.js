import { useState } from 'react';
import Navigation from './Navigation'
import Link from 'next/link'
import Login from '../Screens/Login'
import Ana from './Components/Ana';
import Slide from 'react-reveal/Slide'
import Upload from '../Apps/Upload'
import Profile from '../User/Profile'
import Viewuploads from '../Apps/Viewuploads';
import Analytics from './Analytics';
import Footer from '../../Components/Footer'
import Notification from './Notification';
import Paidapps from '../Apps/Paidapps';
export default function Sidebar({ user }) {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const [dash, setdash] = useState(false)
    const [Addapp, setAddapp] = useState(false)
    const [profile, setprofile] = useState(false)
    const [notification, setnotification] = useState(false)

    const [apps, setapps] = useState(false)
    const [analytics, setanalytics] = useState(false)
    const [Paid, setpaid] = useState(false)
    const changePage = (str) => {
        if (str === "Upload") {
            setdash(false)
            setAddapp(true)
            setprofile(false)
            setapps(false)
            setanalytics(false)
            setpaid(false)
            setnotification(false)

        } else if (str === "Profile") {
            setAddapp(false)
            setprofile(true)
            setapps(false)
            setpaid(false)
            setdash(false)
            setanalytics(false)
            setnotification(false)
        }
        else if (str === "Dashboard") {
            setdash(true)
            setpaid(false)
            setAddapp(false)
            setprofile(false)
            setapps(false)
            setanalytics(false)
            setnotification(false)
        }
        else if (str === "Uploads") {
            setapps(true)
            setdash(false)
            setAddapp(false)
            setprofile(false)
            setpaid(false)
            setanalytics(false)
            setnotification(false)
        }
        else if (str === "Analytics") {
            setapps(false)
            setdash(false)
            setAddapp(false)
            setprofile(false)
            setanalytics(true)
            setpaid(false)
            setnotification(false)
        }
        else if (str === "Notifications") {
            setapps(false)
            setdash(false)
            setAddapp(false)
            setprofile(false)
            setanalytics(false)
            setpaid(false)
            setnotification(true)
        }
        else if (str === "paidapps") {
            setapps(false)
            setdash(false)
            setAddapp(false)
            setprofile(false)
            setanalytics(false)
            setnotification(false)
            setpaid(true)
        }
    }
    return (
        <>
            {user ? <>
                <Navigation showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar} user={user} />
                <div
                    className={`h-full  fixed top-24 py-12 md:left-0 ${showSidebar}  flex-row flex-nowrap  shadow-xl bg-white z-10  w-64 py-4 px-6 transition-all duration-300`}
                >
                    <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                        <Slide bottom> <li className="rounded-lg my-2 head bg-0pacity-80 text-gray-50 flex flex-row justify-center cursor-pointer" onClick={() => changePage('Dashboard')}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                            </svg>
                            <a className="flex items-center gap-4 text-xl text-gray-50 font-semibold font-serif  py-1  rounded-lg"
                            >Dashboard</a>
                        </li></Slide>
                        <div className="flex flex-col">
                            <hr className="my-4 min-w-full" />
                           
                                <ul className="flex-col min-w-full flex list-none">


                                    <Slide top><li className="rounded-lg my-2 flex p-1 flex-row justify-center hover:text-black text-xl bg-white hover:bg-gray-200 text-blue-800 group cursor-pointer" onClick={() => changePage('Profile')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <Link href=""><a className="flex items-center   font-semibold font-serif  py-2  rounded-lg"
                                        >Your Profile</a></Link>
                                    </li></Slide>
                                    <Slide bottom><li className="rounded-lg my-2 p-1 flex flex-row justify-center bg-white hover:bg-gray-200 hover:text-black text-xl text-blue-800 group cursor-pointer" onClick={() => changePage('Uploads')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 m-1 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                                            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                                        </svg>
                                        <Link href=""><a className="flex items-center   font-semibold font-serif  py-2  rounded-lg"
                                        >Your Uploads</a></Link>

                                    </li></Slide>
                                    <Slide top>
                                        <li className="rounded-lg my-4 p-1 flex flex-row justify-center bg-white hover:bg-gray-200 hover:text-black text-xl text-blue-800 group cursor-pointer" onClick={() => changePage('Upload')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <Link href=""><a className="flex items-center   font-semibold font-serif  py-2  rounded-lg"
                                            >Upload Apps</a></Link>
                                        </li></Slide>

                                        <Slide top>
                                        <li className="rounded-lg my-2 p-1 flex flex-row justify-center bg-white hover:text-black text-xl hover:bg-gray-200 text-blue-800 group cursor-pointer" onClick={() => changePage('paidapps')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <Link href=""><a className="flex items-center   font-semibold font-serif  py-2  rounded-lg"
                                            >Add Paid App</a></Link>

                                        </li>
                                    </Slide>
                                    <Slide bottom>
                                        <li className="rounded-lg my-2 p-1 flex flex-row justify-center bg-white hover:text-black text-xl hover:bg-gray-200 text-blue-800 group cursor-pointer" onClick={() => changePage('Analytics')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                            </svg>
                                            <Link href=""><a className="flex items-center   font-semibold font-serif  py-2  rounded-lg"
                                            >Apps Analytics</a></Link>

                                        </li>
                                    </Slide>
                                

                                </ul>
                           

                        </div>
                    </div>
                </div>
                <div className='  flex lg:flex-row md:flex-row flex-col h-auto '>
                    <div className='lg:w-80  invisible h-0 md:w-1/4 sm:w-screen w-screen '>
                    </div>
                    <div className='lg:w-full md:w-3/4 sm:w-screen w-screen '>
                        {/* {
                          Addapp ? <Upload user={user}/>:<><Ana user={user}/></>
                       } */}

                        {
                            dash ?
                                <Ana user={user} />
                                :
                                (profile ?
                                    <Profile user={user} />
                                    :
                                    (Addapp ?
                                        <Upload user={user} />
                                        :

                                        (apps ?
                                            <Viewuploads user={user} />
                                            :

                                            (analytics ?

                                                <Analytics user={user} />
                                                :
                                                (notification ?
                                                    <Notification user={user} />
                                                    :
                                                   (Paid ?
                                                    <Paidapps user={user}/>
                                                    :
                                                    <Ana user={user} />
                                                    )
                                                )
                                            )
                                        )

                                    )



                                )





                        }
                        <Footer />
                    </div>


                </div>

            </> : <>

                <Login />
            </>}
        </>
    );
}
