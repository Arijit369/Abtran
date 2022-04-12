
import React from 'react'
import Link from 'next/link'
import Footer from '../../Components/Footer'
export default function Aboutus() {
  return (
    <><div className="font-sans p-2 antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ background: "url('https://source.unsplash.com/1L71sPT5XKc')" }}>

		  <div className='bg-white bg-opacity-75 p-1'>
			  <h1 className='text-center underline text-3xl font-bold font-serif my-1'>About Us, Our Team  </h1>
			  
			  <div className='p-1 flex lg:flex-row flex-col gap-1'>
				  <div className='mx-auto '>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fthanks.jpg?alt=media&token=0a6f1bb7-ad1a-406e-8567-57fa96b2aa4c" className="rounded-none lg:rounded-lg shadow-2xl h-96" />
				  </div>
				  <div className=' mx-auto'>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fabout.jpg?alt=media&token=3509df99-2336-43ca-9406-da34a362fdb5" className="rounded-none lg:rounded-lg shadow-2xl h-96" />
				  </div>
			  </div>
		  </div>

		  <div className='  p-2  bg-white bg-opacity-75 flex lg:flex-row flex-col gap-2'>
		  <div className='lg:w-1/2 bg-white p-5 rounded-lg font-serif text-gray-900 text-2xl '>
		  <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-center">Arijit</h1>
			  <div className='mx-auto '>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2F86972725_859431657851807_4423536175638118400_n.jpg?alt=media&token=dcd22c48-3558-48c3-8346-3e2b95f2ff15" className="rounded-none lg:rounded-lg shadow-2xl h-64 mx-auto" />
				  </div>
				  <h1 className='text-center text-xl underline font-bold'>Problem Solver (Director)</h1>
			      <h1 className='text-center text-lg'>"Never change your originality for the sake of others. Because no one can play your roles better than you. You are the best when you are YOU."</h1>

			  </div>


			  <div className='lg:w-1/2 bg-white p-5 rounded-lg font-serif text-gray-900 text-2xl '>

			  <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-center">Sidharth Guleria</h1>
				  <div className='mx-auto '>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2FWhatsApp%20Image%202022-02-03%20at%209.27.55%20PM.jpeg?alt=media&token=1dff99e4-b039-4ac6-98c5-00a9087e3cfe" className="rounded-none lg:rounded-lg shadow-2xl h-64 mx-auto" />
				  </div>
				  <h1 className='text-center text-xl underline font-bold'>Program Architect (A.K.A Web and App Developer)</h1>
			      <h1 className='text-center text-lg'>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” </h1>
			  </div>
			  

		  </div>

		  
          <div className='  p-2  bg-white bg-opacity-75 flex lg:flex-row flex-col gap-2'>
		  <div className='lg:w-1/2 bg-white p-5 rounded-lg font-serif text-gray-900 text-2xl '>
		  <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-center">Lina Paul</h1>
			  <div className='mx-auto '>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fl.jpg?alt=media&token=67257681-781d-425b-a68b-ab30bf06ecc9" className="rounded-none lg:rounded-lg shadow-2xl h-64 mx-auto" />
				  </div>
				  <h1 className='text-center text-xl font-bold'>Designer and Documenter (Artist)</h1>
			      <h1 className='text-center text-lg'>"Be your own masterpiece, one of kind"</h1>

			  </div>


			  <div className='lg:w-1/2 bg-white p-5 rounded-lg font-serif text-gray-900 text-2xl '>

			  <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-center">Gayathri S</h1>
				  <div className='mx-auto '>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fg.jpg?alt=media&token=eeace402-dff1-495d-92b2-5c14498c8bbc" className="rounded-none lg:rounded-lg shadow-2xl h-64 mx-auto" />
				  </div>
				  <h1 className='text-center text-xl font-bold'>Designer and Documenter (Artist)</h1>
			      <h1 className='text-center text-lg'>“The first best thing to explore is yourself.” – Anonymous Traveller</h1>
			  </div>
			  

		  </div>


	  </div><Footer /></>
  )
}
