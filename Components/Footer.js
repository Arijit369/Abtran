import Image from 'next/image'
import logo from './images/logo.png'
import Link from 'next/link'
export default function Footer({user}) {
  
    return (

        // <div className="mx-auto  h-48 bg-opacity-90 footer">
        // <h1 className="text-white text-center text-xl font-bold ">
        //     Footer
        // </h1>
            
        // </div>
        <footer className="text-gray-400 footer body-font ">
  <div className="container px-5 py-3 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Link href="/"><a><Image
    className="object-contain m-1 "
src={logo} alt="" height={50} width={85}/></a></Link>
        <span className=" text-xl">Abtaran™ </span>
      </a>
      <p className="mt-1 text-sm text-gray-300  font-bold font-serif">Abtaran App Store, Sailing Towards Growth.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">FOR DEVELOPERS</h2>
        <nav className="list-none mb-10">
        
         {user ?<>
         
          <li>
          <Link href="/Developers/Dashboard"><a className="text-gray-400 hover:text-white">Developers Dashboard </a></Link>
          </li>
         </>:<>
         <li>
          <Link href="/Developers/Dashboard"><a className="text-gray-400 hover:text-white">Users Login</a></Link>
          </li>
         </>}
          <li>
            <Link href="/Screens/Developers"><a className="text-gray-400 hover:text-white">Instructions For Developers</a></Link>
          </li>
         
       
          <li>
        <Link href="/Screens/Feedback"><a className="text-gray-400 hover:text-white ">Give Feedback</a></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">FOR USERS </h2>
        <nav className="list-none mb-10">
          <li>
           <Link href="/User/User_Guide"><a className="text-gray-400 hover:text-white">Instructions For Users</a></Link>
          </li>
          <li>
          <Link href="/Screens/Feedback"><a className="text-gray-400 hover:text-white">Give Feedback</a></Link>
          </li>
          <li>
          <Link href="/Screens/Contact"><a className="text-gray-400 hover:text-white">Contact Us</a></Link>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT US AND MORE</h2>
        <nav className="list-none mb-10">
        <li>
        <Link href="/Screens/TermsandConditions"><a className="text-gray-400 hover:text-white">Terms and Conditions</a></Link>
          </li>
          <li>
            <Link href="/Screens/PrivacyPolicy"><a className="text-gray-400 hover:text-white">Privacy Policy</a></Link>
          </li>
          <li>
            <Link  href="/Screens/Aboutus"><a className="text-gray-400 hover:text-white">About Us</a></Link>
          </li>
         
        </nav>
      </div>
     
      
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Abtaran™—
        <a href="" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank"></a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        
       
        <a href="https://www.instagram.com/abtaran_india/ " target='_blank' className=" mx-2 text-red-400">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UC1wag2ByTBmkhU1WpkrM7Rg" target='_blank' className=" mx-2 text-gray-400">
        <svg className="w-8 h-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
        </a>
     
     
        <a href="https://in.pinterest.com/abtaran_india " target='_blank' className=" mx-2 text-gray-400">
        <svg
  class="w-6 h-5 text-pink-600 fill-current"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
  />
</svg>
        </a>
        <a href="https://discord.link/abtaran_india " target='_blank' className=" mx-2 text-gray-400">
        <svg  class="w-6 h-6 text-yellow-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
        </a>
      
      </span>
    </div>
  </div>
</footer>
    )
}
