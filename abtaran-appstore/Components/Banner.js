
import Image from 'next/image'

import Link from 'next/link'

export default function Banner() {
    return (
        <header className="flex flex-col sm:flex-row bg-opacity-80  justify-between items-center banner animated w-full">
      
    

       
           <div className="flex flex-grow  justify-evenly  ">
           <h5 className="my-1  text-justify text-md lg:text-2xl md:text-xl sm:text-lg  p-1 font-serif tracking-widest">Welcome To Abtaran App Store.Your own app store made in India</h5>
          
           </div>
         {/* <Link href="/Screens/Login"><a> <button className=" p-2 my-1 mx-1  flex items-center justify-center rounded-md bg-black text-white animate-pulse" type="submit">Upload An App</button></a></Link> */}
         

           
   

           </header>
    )
}
