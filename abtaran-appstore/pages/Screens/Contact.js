import { useState } from "react"
import { db } from "../../firebase"
import { useRouter } from "next/router"
export default function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [msg, setmsg] = useState('')
  const [alert, setalert] = useState('')
  const router = useRouter();
  const Submit = async () => {

    if (!name || !email || !msg) {
      setalert('Please Enter All Fields')

    } else {
      try {
        await db.collection('Queries').add({
          name: name,
          emai: email,
          msg: msg
        })
        setalert('Form Submiited We Will Contact You Shortly')
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
      <section className="text-gray-600 bg-gray-100 bg-opacity-50 body-font relative">
        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/d/embed?mid=1L_Lje1sw3gbh7Qvt1uCGzZgw_VA&msa=0&ie=UTF8&t=m&ll=19.522506865457725%2C66.49422826651673&spn=5.184843%2C8.778076&z=4&output=embed" ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">41A/4, Dum Dum Road, Kolkata- 700074, West bengal, India </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">aaarijit3@gmail.com </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+919051921868 </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 shadow-lg p-2 rounded-lg">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Enter Your Details</p>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" value={msg} onChange={(e) => setmsg(e.target.value)} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button onClick={Submit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex justify-center">Submit&nbsp;<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></button>
            <p className="text-xs text-gray-500 mt-3">Your Data is Important to us. We Care About Your Privacy .</p>
          </div>
        </div>
      </section>

    </div>
  )
}
