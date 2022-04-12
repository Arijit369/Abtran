import Image from 'next/image'
import Untitled from '../../Components/images/Untitled.png'
import Footer from '../../Components/Footer'
export default function User_Guide() {
    return (
        <><section className="text-gray-600 body-font">
          <div className='  p-2 '>
            <div className='p-2'><h1 className='font-serif text-xl text-gray-900 font-bold'>Important Links</h1></div>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-3 p-2 lg:container mx-auto '>
            <div className='lg:w-1/2  p-2 flex justify-center items-center'>
            <ul className="list-none md:list-disc p-2" >
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1Nah_PJ-EOq9QntFU9uNOVi4K0COWkRFN/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">1. Welcome Document</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1G9RcGtFAK4eSSG2n8QV4gfIi2kMfk5wK/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">2. How to download and install apps from Abtaran</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1NkGyUPuYMhpY7KHahb6ljSTgXJBuHp1y/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">3. Abtaran App Store Reward Program -process</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1YAYblKVAIQ0wnY53mva7t-ccH0l8VjrQ/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">4. Abtaran App Store Reward Program- Gifts for you to win</a></li>
              
            </ul>
            </div>
            <div className='lg:w-1/2  p-2 flex justify-center items-center'>
            <ul className="list-none md:list-disc p-2">
             
              <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/10mhu92FnbJz-L1M0Sj90JN_fRAGGJpkY/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">5. Abtaran App Store Reward Program- Rules and Guidelines</a></li>
              <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1zfJhrKC21aBUXxkpKl2D9-lrnmSio6hw/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">6. Our NFTs, your crypto earning opportunity</a></li>
              <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/14RaleVruXI18GbTaN278jaN5e-swa_8L/edit">7. Contact Us</a></li>
              <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1cwfY8eBLSpwDrUWKU_wAHQKmITLwAIa2/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">8. Endnote</a></li>
              
            </ul>
            </div>
            </div>

          </div>
        <div className="container  px-5 py-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full lg:gap-16 justify-center ">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 lg:mx-20 ">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p className="leading-relaxed flex flex-row ">
Click on the download button to download the .APK file in your device <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg> </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p className="leading-relaxed">Find the file in your storage and install it</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                  <p className="leading-relaxed">Give necessary permission to your device to install the file from unknown sources. You can ignore the warnings, we take significant security measures to ensure safety. </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                  <p className="leading-relaxed">The app will be installed</p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p className="leading-relaxed">
Enjoy using apps from Abtaran App Store, don't forget to take part in our reward program </p>
                </div>
              </div>
            </div>
            <Image className=" object-cover object-center  px-2 " src="https://firebasestorage.googleapis.com/v0/b/abtaran-be350.appspot.com/o/Site%20Data%2Fdwn.png?alt=media&token=371b587a-1b4c-44f3-8e41-405825723747" alt="step" height="400" width="470" layout="fixed" />
          </div>
        </div>
{/* <div className=' p-5'>
 <h1 className='text-black text-2xl font-bold font-serif'>Other Important Links </h1>

 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1Nah_PJ-EOq9QntFU9uNOVi4K0COWkRFN/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">Welcome Document</a><br/>
 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1G9RcGtFAK4eSSG2n8QV4gfIi2kMfk5wK/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">How to download and install apps from Abtaran</a><br/>
 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1NkGyUPuYMhpY7KHahb6ljSTgXJBuHp1y/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">Abtaran App Store Reward Program -process</a><br/>
 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1YAYblKVAIQ0wnY53mva7t-ccH0l8VjrQ/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">Abtaran App Store Reward Program- Gifts for you to win</a><br/>
 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/10mhu92FnbJz-L1M0Sj90JN_fRAGGJpkY/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">Abtaran App Store Reward Program- Rules and Guidelines</a><br/>
 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1zfJhrKC21aBUXxkpKl2D9-lrnmSio6hw/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">Our NFTs, your crypto earning opportunity</a><br/>
 <a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1cwfY8eBLSpwDrUWKU_wAHQKmITLwAIa2/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">Endnote</a><br/>
</div> */}

      </section><Footer /></>
    )
}
