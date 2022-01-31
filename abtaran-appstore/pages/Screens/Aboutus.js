
import React from 'react'
import Link from 'next/link'
import Footer from '../../Components/Footer'
export default function Aboutus() {
  return (
    <><div className="font-sans p-2 antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ background: "url('https://source.unsplash.com/1L71sPT5XKc')" }}>

		  <div className='bg-white bg-opacity-75 p-1'>
			  <h1 className='text-center underline text-3xl font-bold font-serif my-1'>About Us</h1>
			  <h1 className='text-justify font-semibold text-lg  font-mono my-1'>Abtaran™ App Store Private Limited (will be denoted as Abtaran™ App Store from this point) is a rare Indian (Bharatiya) project for all app developers around the world.It has been planned keeping in mind your convenience, abundance and profits.Abtaran.in is specially planned exclusively for Bharatiya app developers with a vision to help them increase their revenue.We are eager to see your apps, innovations and ideas.We would be celebrating your presence on our platform.
			  
			
			  
			  </h1>
			  <div className='p-1 flex lg:flex-row flex-col gap-1'>
				  <div className='w-1/2'>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fthanks.jpg?alt=media&token=0a6f1bb7-ad1a-406e-8567-57fa96b2aa4c" className="rounded-none lg:rounded-lg shadow-2xl h" />
				  </div>
				  <div className='w-1/2'>
				  <img src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fabout.jpg?alt=media&token=3509df99-2336-43ca-9406-da34a362fdb5" className="rounded-none lg:rounded-lg shadow-2xl h" />
				  </div>
			  </div>
		  </div>

		  <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto  lg:my-0">


			  <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0">


				  <div className="p-4 md:p-12 text-center lg:text-left">
					  {/* <!-- Image for mobile view--> */}
					  <div className="block lg:hidden rounded-full shadow-xl lg:mx-auto  h-96 lg:w-96 w-full bg-cover bg-center" style={{ background: "url('https://media-exp1.licdn.com/dms/image/C5603AQGxEH1Vjdkf9g/profile-displayphoto-shrink_800_800/0/1609354783010?e=1648080000&v=beta&t=SKzB1WpnIAO-BRJace1Z7DVar6z6StTp45GjZE2DTNQ')" }}></div>

					  <h1 className="text-3xl font-bold pt-8 lg:pt-0">Arijit Parmanik</h1>
					  <h1 className="text-lg font-bold pt-8 lg:pt-0 "> Problem Solver (Director)</h1>
					  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>


					  <p className="pt-8 text-sm text-justify">“Never change your originality for the sake of others. Because no one can play your roles
better than you. You are the best when you are YOU.” </p>

					  <div className="pt-12 pb-8">
						  <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
							  Get In Touch
						  </button>
					  </div>

					  <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">

						  <a className="link" href="#" data-tippy-content="@instagram_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg></a>
						  <a className="link" href="#" data-tippy-content="@youtube_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg></a>
					  </div>



				  </div>

			  </div>


			  <div className="w-full lg:w-2/5">
				  {/* <!-- Big profile image for side bar (desktop) --> */}
				  <img src="https://media-exp1.licdn.com/dms/image/C5603AQGxEH1Vjdkf9g/profile-displayphoto-shrink_800_800/0/1609354783010?e=1648080000&v=beta&t=SKzB1WpnIAO-BRJace1Z7DVar6z6StTp45GjZE2DTNQ" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
				  {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}

			  </div>


			  {/* <!-- Pin to top right corner --> */}
			  <div className="absolute top-0 right-0 h-12 w-18 p-4">
				  <button className="js-change-theme focus:outline-none">🌙</button>
			  </div>

		  </div>

		  <div className='bg-white bg-opacity-75 p-1 w-full'>
			  <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto  lg:my-0">


				  <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0">


					  <div className="p-4 md:p-12 text-center lg:text-left">
						  {/* <!-- Image for mobile view--> */}
						  <div className="block lg:hidden rounded-full shadow-xl lg:mx-auto  h-96 lg:w-96 w-full bg-cover bg-center" style={{ background: "url('https://media-exp1.licdn.com/dms/image/C4D03AQHde9Ck-xuEUg/profile-displayphoto-shrink_400_400/0/1631285983885?e=1648684800&v=beta&t=w-WI4Qk1sQA8AFI06YodL1eZcdNoufrJx--IzSgZoy8')" }}></div>

						  <h1 className="text-3xl font-bold pt-8 lg:pt-0">Sidharth Guleria</h1>
						  <h1 className="text-sm font-bold pt-8 lg:pt-0 ">Program Architect (A.K.A Web and App Developer)</h1>
						  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>


						  <p className="pt-8 text-sm text-justify">Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>

						  <div className="pt-12 pb-8">
							  <Link href="https://www.instagram.com/sportsmadness247/"><a target="_blank"><button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
								  Get In Touch
							  </button></a></Link>
						  </div>

						  <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">

							  <Link href="https://www.instagram.com/sportsmadness247/"><a target="_blank" className="link" href="#" data-tippy-content="@instagram_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg></a></Link>
							  <a className="link" href="#" data-tippy-content="@youtube_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg></a>
						  </div>



					  </div>

				  </div>


				  <div className="w-full lg:w-2/5">
					  {/* <!-- Big profile image for side bar (desktop) --> */}
					  <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHde9Ck-xuEUg/profile-displayphoto-shrink_400_400/0/1631285983885?e=1648684800&v=beta&t=w-WI4Qk1sQA8AFI06YodL1eZcdNoufrJx--IzSgZoy8" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
					  {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}

				  </div>


				  {/* <!-- Pin to top right corner --> */}
				  <div className="absolute top-0 right-0 h-12 w-18 p-4">
					  <button className="js-change-theme focus:outline-none">🌙</button>
				  </div>

			  </div>
		  </div>
          <div className='  p-2  bg-white bg-opacity-75 flex lg:flex-row flex-col gap-2'>
			  <div className='lg:w-1/2 bg-white p-1 rounded-lg font-serif text-gray-900 text-2xl '>

				  <h1 className='text-center font-bold '>Gayathri S.</h1>
				  <h1 className='text-center text-xl'>Designer and Documenter (Artist)</h1>
			      <h1 className='text-center text-xl'>“The first best thing to explore is yourself.” – Anonymous Traveller</h1>
			  </div>
			  <div className='lg:w-1/2 bg-white p-1 rounded-lg font-serif text-gray-900 text-2xl '>
			  <h1 className='text-center font-bold'>Lina Paul.</h1>
				  <h1 className='text-center text-xl'>Designer and Documenter (Artist)</h1>
			      <h1 className='text-center text-xl'>"Be your own masterpiece, one of kind"</h1>

			  </div>


		  </div>


	  </div><Footer /></>
  )
}
