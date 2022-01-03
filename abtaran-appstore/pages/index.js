import {useState} from 'react'
import Slide from 'react-reveal/Slide'
import Link from "next/link"
import App_row from './Screens/App_row'
import Apps from './Screens/Apps'
import Apps_filter from './Screens/Apps_filter'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
export default function Index() {
  
  const [ShowSection, setShowSection] = useState(false)
  const [Section, setSection] = useState("")
  const [Filter, setFilter] = useState('')
    const [showFilter, setshowFilter] = useState(false)

  const changeState = (section) => {
    setShowSection(!ShowSection)
    setSection(section)
}
const changeFilter = (filter) => {
  setshowFilter(true)
  setFilter(filter)
}

const hideFilter = () => {
  setshowFilter(false)
}
  return (
    <div className='h-auto'><Banner /><div className="mb-3">
      {/* <h1 onClick={() => changeFilter('engineering')}>next</h1> */}
      <nav className="relative  nv ">
        <div className="flex p-2 px-10 sm:px-20 text-2xl whitespace-rowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={hideFilter}>Home</h2>
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Shoping')}>Shoping</h2>
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Music')}>Music</h2>
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Gaming')}>Gaming</h2>
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Entertainment')}>Entertainment</h2>
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Education')}>Education</h2>
          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Science')}>Science</h2>

          <h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125 hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500" onClick={() => changeFilter('Art')}>Art</h2>
          <Link href="/User/User_Guide"><a><h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125  hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500">User_Guide</h2></a></Link>
          <Link href="/User/User_Guide"><a><h2 className="cursor-pointer font-serif transition duration-100 transform hover:scale-125  hover:text-red-300 text-gray-200 hover:font-bold active:text-red-500">Developers_Guide</h2></a></Link>

        </div>
        <div className="absolute  top-0 right-0 bg-gradient-to-l from-[#06202A] h-12 w-1/12 " />
      </nav>
      {/* <div className=' text-center bg-gray-100  bg-opacity-50 p-1'><h1 className='text-2xl text-gray-800 font-serif font-semibold'>Scroll Left Or Right To See All Navigation Shortcuts And Apps  </h1></div> */}
      {showFilter ? <Apps_filter hideFilter={hideFilter} filtername={Filter} /> :
        <>

          {ShowSection ?
            <Apps section={Section} changeState={changeState} />
            :
            <Slide up>
              <div className="">
                {/* <App_row title="Trending" changeState={changeState}/> */}

                <App_row title="Shoping" changeState={changeState} />
                <App_row title="Gaming" changeState={changeState} />
                <App_row title="Education" changeState={changeState} />
                <App_row title="Entertainment" changeState={changeState} />

              </div>
            </Slide>}




        </>}
    </div>
    <Footer/>
    </div>
  )
}
