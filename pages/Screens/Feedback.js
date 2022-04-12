
import { useState } from "react"
import { db , serverTimestamp } from "../../firebase"
import Footer from '../../Components/Footer'
import { useRouter } from "next/router"
export default function Coment() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [msg, setmsg] = useState('')
  const [alert, setalert] = useState('')
  const router = useRouter('')
  const Submit = async () => {
    if (!name || !email || !msg) {
      setalert('Please Enter All The Fields')

    } else {
      try {
        await db.collection('Comments').add({
          name: name,
          emai: email,
          msg: msg,
          time:serverTimestamp()
        })
        window.alert('Form Submiited We Will Contact You Shortly')
        await router.push('/')



      } catch (error) {
        setalert(error);
      }
    }
  }
  return (
    <div>
      {alert ?
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Dear User </strong>
          <span className="block sm:inline">{alert}</span>

        </div> : <></>}
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-serif text-gray-900">Give Feedback</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your feedback is important for us.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" value={msg} onChange={(e) => setmsg(e.target.value)} name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={Submit} className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg  justify-center">Submit &nbsp;<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  )
}
