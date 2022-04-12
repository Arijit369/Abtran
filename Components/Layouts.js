
import Header from './Header'
import Head from 'next/head'


import { auth } from '../firebase'
import { useEffect ,useState} from 'react'
import Footer from './Footer'
export default function Layouts({ children }) {
  const [user,Setuser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
Setuser(user)
      }else{
        Setuser(null)
      }
    })
  })
  return (
    <>
<Head>
  <title>Abtaran App Store</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>

<link rel="pingback" href="https://www.abtaran.in/"/>
<link rel="canonical" href="https://www.abtaran.in/" />
<meta name="title" content="Abtaran App Store is the Indian App Store , Sailing Towards Growth. "/>
<meta name="description" content=" Abtaran App Store is the Indian App Store , Sailing Towards Growth."/>
<meta name="keywords" content="Abtaran App Store , Abtaran , Abtaran India , Indian Appstore , Appstore"/>
<meta name="robots" content="index, follow"/>
<meta name="language" content="English"/>
<meta name="author" content="Arijit "></meta>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
<meta property="og:url" content="https://www.abtaran.in/"/>
<meta property="og:site_name" content="https://www.abtaran.in/"/>
<meta property="og:image" content="%PUBLIC_URL%/favicon.ico"></meta>

   
</Head>
 
      <Header user={user} />
    
      <main>{children}</main>
  
    </>
  )
}