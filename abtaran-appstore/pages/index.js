import { useState, useEffect } from 'react'
import Slide from 'react-reveal/Slide'
import Link from "next/link"
import App_row from './Screens/App_row'
import Apps from './Screens/Apps'
import Apps_filter from './Screens/Apps_filter'
import { db } from '../firebase'
import Footer from '../Components/Footer'
import { MenuIcon, XCircleIcon } from '@heroicons/react/solid'

export default function Home() {
  
  const [ShowSection, setShowSection] = useState(false)
  const [Section, setSection] = useState("")
  const [Filter, setFilter] = useState('')
  const [showFilter, setshowFilter] = useState(false)
  const [loading, setLoading] = useState(true);
  const [cat, setcat] = useState([])
  const changeState = (section) => {
    setShowSection(!ShowSection)
    setSection(section)
  }
  const changeFilter = (filter) => {
    setshowFilter(true)
    setFilter(filter)
    closeNav();
  }

  const hideFilter = () => {
    setshowFilter(false)
  }
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Category").orderBy("Category" , "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            id: doc.id, // `id` given to us by Firebase
          });
        });
        setcat(getPostsFromFirebase);
        setLoading(false);


      });

    // return cleanup function
    return () => subscriber();
  }, [cat, loading]);
  if (loading) {
    return <></>
      ;
  }

  // open close nav
  const openNav = () => {
    document.getElementById('mySidenav').style.width = '100%'
    document.getElementById('mySidenav').style.paddingLeft = '20px'
  }

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0%'
    document.getElementById('mySidenav').style.paddingLeft = '0px'
  }
  return (
    <><div className='h-auto'><div className="mb-3">
      {/* <h1 onClick={() => changeFilter('engineering')}>next</h1> */}
      <nav className="relative  nv bg-opacity-90 w-full  ">
        <div className="flex p-1  gap-3 text-lg  flex-row justify-between ">
         
          <h2 onClick={openNav} className=" nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><MenuIcon className='h-7' />Browse</h2>
          <h2 onClick={hideFilter} className=" nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Home</h2>
          
          <Link href="/Screens/Latest"><a> <h2  className="nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Latest_Apps</h2></a></Link>
          {/* <Link href="/Screens/Blogs"><a> <h2  className="nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Blogs</h2></a></Link>

          <Link href="/User/User_Guide"><a> <h2  className="nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Users_Guide</h2></a></Link>
          <Link href="/User/User_Guide"><a> <h2  className="nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Developers_Guide</h2></a></Link> */}

        </div>
        
      </nav>

      {showFilter ? <Apps_filter hideFilter={hideFilter} filtername={Filter} /> :
        <>

          {ShowSection ?
            <Apps section={Section} changeState={changeState} />
            :
            <Slide up>
              <div className="">

                {cat.map((i, index) => (<div key={index}>
                  <App_row title={i.Category} changeState={changeState} />
                </div>))}
              </div>
            </Slide>}




        </>}
    </div>
      <Footer />
    </div>


      {/* sidebar */}
      <div id="mySidenav" className="sidenav  h-auto text-white p-3 top-36 -left-4 fixed  z-50 overflow-x-hidden">



        <div className='bg-opacity-90  bg-black p-2 h-full  flex flex-col lg:mt-2 mt-8 '>
         
          <h2 onClick={closeNav} className="cursor-pointer my-1 font-serif transition duration-100 transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><XCircleIcon className='h-9' /><p className='mt-1 text-xl'>Close</p></h2>

          <h2 onClick={hideFilter} className="cursor-pointer my-1 font-serif transition duration-100 transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><MenuIcon className='h-9' /><p className='mt-1 text-xl'>Home</p></h2>
          {
            cat.map((i, index) => (<>


              <h2 key={index} className="cursor-pointer font-serif text-xl hover:underline my-2 transition duration-100 transform  text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter(`${i.Category}`)}>{i.Category}</h2>

            </>))}

        </div>

      </div></>
  )
}
