import Image from 'next/image'
import Untitled from '../../Components/images/Untitled.png'
import Footer from '../../Components/Footer'
export default function Developers() {
    return (
        <><section className="text-gray-600 body-font">
          <div className='container mx-auto p-2 flex items-center justify-center'><p className='font-serif text-2xl underline'>Instructions For Developers</p></div>
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
                  <p className="leading-relaxed flex flex-row ">Click On Developers Dashboard    </p>
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
                  <p className="leading-relaxed">Create Your Account And Login </p>
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
                  <p className="leading-relaxed">Use Developers Dashboard According To Your Need</p>
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
                  <p className="leading-relaxed">Click On Upload App And Form Opens Now Upload Asked Uploads </p>
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
                  <p className="leading-relaxed">Use Analytics Tab To View Your Uploaded App Analytics No Of Downloads , Likes And Comments </p>
                </div>
              </div>
            </div>
            <Image className=" object-cover object-center  px-2 " src={Untitled} alt="step" height="400" width="470" layout="fixed" />
          </div>
        </div>
        <div className='  p-2 '>
            <div className='p-2'><h1 className='font-serif text-xl text-gray-900 font-bold'>Important Links</h1></div>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-3 p-2 lg:container mx-auto '>
            <div className='lg:w-1/2  p-2 flex justify-center items-center'>
            <ul className="list-none md:list-disc p-2" >
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/13GcLNAX74yrmb51zt18N1hsUmsb0ahuP/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">1.Welcome Document</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1h3ymLKwynE-hcqxjGTa6Fmce9-QuU6ND/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">2. General things about the website</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1VBJkWAmbFNMU4i0aH53xmNn9wR44EppU/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">3. What will the App Developers miss if they don’t publish apps on Abtaran™ App Store</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1geB3RTF-mrunPv0xgPw0z-S2NqzTTaqV/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">4. How to subscribe to upload your .APK files on Abtaran™ App Store</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1Lu5wAENtvuJQGd4UqJfACKPuhvRc3QH3/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">5. What happens if your subscription ends</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/19CIg9SgczPnTt2EA1yzR_nyrqMV_Z710/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">6. Earning ad revenue by showing ads in your apps </a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/16k3PMp4kmlC27Hd6iNJDw4nekkDVpVYm/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">7. In-app purchases in Abtaran™ App Store</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1SROAJfxh9q-wfIvN_ZwS7tH0zt8_Oysw/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">8. Sale of paid apps in Abtaran™ App Store</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1rQuTjD5IkHN77-r-6moMSoy5pC01C7sg/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">9. Our exclusive free content creation + marketing program for your apps</a></li>
                  <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1w1xMyOZp45I2cXeCzrJQ_L9qAml855-d/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">10. IP rights of the contents we create</a></li>
            </ul>
            </div>
            <div className='lg:w-1/2  p-2 flex justify-center items-center'>
            <ul className="list-none md:list-disc p-2">
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1dk47NXNM8ib0eadb1TNcxDLKgQ9sX0Gk/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">11. Abtaran™ App Store’s Analytics Report Facility for your apps</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1D0LgLRd097w9LqZbkA5EqJfUKBQHfnlF/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">12. Our premium products and services</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1w9VLgs4WOmlXnu9ODDbZ56q_KB8hLKup/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">13. How to submit your .APK files on Abtaran™ App Store</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1ZvRuQTWrZRFvWgvHqLOEwKvGJeTzUcDN/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">14. Abtaran™ Ecosystem and Impact</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1IHxmCcpViSLO3bzg3sn8HbfgOdr3iGbw/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">15. Anti-fraud policy of Abtaran™ App Store</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1VcGexbEz5deDvhpUkN7ge6oDH5ElJZWk/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">16. Screening of your apps</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1KrY9Vd9sz8QY5nsYZNExIWg7xgyc0z6X/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">17. Guidelines and Rules to be followed by app developers </a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/1Argz7NcS_mUhwxPXACsDJ8t4Xgzp9ep4/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">18. Join the revolution- Our contacts</a></li>
            <li><a target="_blank" className='text-blue-700 hover:text-blue-900 hover:underline text-xl font-serif' href="https://docs.google.com/document/d/18LhIJbsDxjSDIP-JIUhK-x4u0Rif1KTf/edit?usp=sharing&ouid=117317523790393786566&rtpof=true&sd=true">19. Endnote and Glossary</a></li>
            </ul>
            </div>
            </div>

          </div>
      </section><Footer /></>
    )
}
