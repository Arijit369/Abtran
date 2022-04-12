import { useState, useEffect } from 'react'
import Slide from 'react-reveal/Slide'
import Link from "next/link"
import App_row from './Screens/App_row'
import Apps from './Screens/Apps'
import Apps_filter from './Screens/Apps_filter'
import { db } from '../firebase'
import Footer from '../Components/Footer'
import View from './Screens/View'
import { useRouter } from 'next/router'

export default function Home({user}) {
  const router = useRouter();
  const [ShowSection, setShowSection] = useState(false)
  const [Section, setSection] = useState("")
  const [Filter, setFilter] = useState('')
  const [Showapp, setShowapps] = useState(false)
  const [appTitle, setappTitle] = useState("")
  const [showFilter, setshowFilter] = useState(false)
  const [loading, setLoading] = useState(true);
  const [cat, setcat] = useState([])
  const ShowSignleapp = (app_title) => {
    setShowapps(!Showapp)
    setappTitle(app_title)
}

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
    window.location.reload(false);
  }
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Category").orderBy("Category" , "asc")
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
  const route =({user})=>{
    router.push('/Screens/Paid')
  }
  return (
    <>
    
    
    <div className='h-auto'><div>
      {/* <h1 onClick={() => changeFilter('engineering')}>next</h1> */}
      <nav className="sticky  nv bg-opacity-90 w-full z-10 lg:top-0  sm:top-0 top-0  ">
        <div className="flex p-1  gap-3 text-lg  flex-row justify-between ">
         
          {/* <h2 onClick={openNav} className=" nv px-1 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><MenuIcon className='h-7' />Browse</h2> */}
          <h2 onClick={hideFilter} className="border-2 border-white px-1 py-1 rounded-md cursor-pointer lg:text-lg text-sm    my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Apps Home</h2>
          
          <h2 onClick={()=>router.push('/Screens/Latest')} className=" border-2 border-white px-1 py-1 rounded-md cursor-pointer text-sm lg:text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Latest Apps</h2>
        {user ?<>  <h2 onClick={()=>route({user})} className=" border-2 border-white px-1 py-1 rounded-md cursor-pointer text-sm lg:text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" >Paid Apps</h2></>:<></>}
          
        </div>
        
      </nav>
     <div className='z-0'>
     {
    Showapp?<View user={user} back ={ShowSignleapp} title={appTitle}/>:
    <>
      {showFilter ? <Apps_filter hideFilter={hideFilter} filtername={Filter} ShowSignleapp={ShowSignleapp} /> :
        <>

          {ShowSection ?
            <Apps section={Section} changeState={changeState} ShowSignleapp={ShowSignleapp} />
            :
            <Slide up>
              <div className="">

                {cat.map((i, index) => (<div key={index} >
                  <App_row title={i.Category} changeState={changeState} ShowSignleapp={ShowSignleapp}/>
                </div>))}
              </div>
            </Slide>}




        </>}
        </>
    
  }
     </div>

    </div>
      <Footer user={user} />
    </div>


      {/* sidebar */}
      {/* <div id="mySidenav" className="sidenav  h-auto text-white p-3 lg:top-36 top-28 -left-6 lg:-left-6 fixed  z-50 overflow-x-hidden">



        <div className='bg-opacity-90  bg-black p-2 h-full  flex flex-col lg:mt-4 mt-10 '>
         
          <h2 onClick={closeNav} className="cursor-pointer my-1 font-serif transition duration-100 transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><XCircleIcon className='h-9' /><p className='mt-1 text-xl'>Close</p></h2>

          <h2 onClick={hideFilter} className="cursor-pointer my-1 font-serif transition duration-100 transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><MenuIcon className='h-9' /><p className='mt-1 text-xl'>Home</p></h2>
          {
            cat.map((i, index) => (<>


              <h2 key={index} className="cursor-pointer font-serif text-xl hover:underline my-2 transition duration-100 transform  text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter(`${i.Category}`)}>{i.Category}</h2>

            </>))}

        </div>

      </div> */}
        
      </>
  )
}
