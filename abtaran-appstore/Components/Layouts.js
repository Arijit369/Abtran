
import Header from './Header'
import Head from 'next/head'


import { auth } from '../firebase'
import { useEffect ,useState} from 'react'
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
  <title>Abtaran Appstore</title>
  

   
   
</Head>
 
      <Header user={user} />
    
      <main>{children}</main>
     
    </>
  )
}