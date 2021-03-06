import Image from 'next/image'
import logo from './images/logo.png'
import Headeritem from './Headeritem'
import Link from 'next/link'
import { HomeIcon, LogoutIcon,LightBulbIcon, LightningBoltIcon } from '@heroicons/react/outline'
import {auth} from '../firebase'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Banner from './Banner'
function Header({user}) {
  const [warning , setwarning]=useState('')
  const router=useRouter()
    return (
        <div className='head bg-opacity-90 sticky  animated top-0 w-full'>
            <header className="flex  m-0 items-center">
         <div className="flex flex-grow">
         <Link href="/"><a><Image
    className="object-contain m-1 "
src={logo} alt="" height={50} width={85}/></a></Link>

         </div>
            <div className="flex flex-grow justify-end gap-5 lg:gap-10 md:gap-8 sm:gap-6  text-center ">
            <Link href="/"><a> <Headeritem title="Home" Icon={HomeIcon}/></a></Link>
          
                <Link href="/User/User_Guide"><a> <Headeritem title="Instructions" Icon={LightBulbIcon}/></a></Link>
                <Link href="/Screens/Blogs"><a><Headeritem title="Blogs" Icon={LightningBoltIcon}/></a></Link>
              
               {user?<>
               
               
            <a onClick={()=>{
          auth.signOut()
          setwarning('Logged out successfully. Come back soon to Abtaran App Store')
         router.push('/')
        }}> <Headeritem title="Logout" Icon={LogoutIcon}/></a>
                {/*   onClick={()=>
               
                auth.signOut()
                
                }*/}
               
                </>
               
               :
               <>   </>
               }
               
              

              
              
              
              
              
            </div>
    

            </header>
           {warning?<div className="bg-red-300 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center font-serif text-xl" role="alert">
  <strong className="font-bold"></strong>
  <span className="block sm:inline text-center">{warning}</span>
  
</div>:<></>}
<Banner/>
            </div>
   
    )
}

export default Header
