import Layouts from "../Components/Layouts";
import { auth } from "../firebase";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useState,useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const [user,setuser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setuser(user)
      }else{
        setuser(null)
      }
    })
  })
  return (
    <Layouts>
      <Component {...pageProps} user={user} />
      </Layouts>
  )
}