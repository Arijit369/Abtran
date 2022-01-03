import Image from 'next/image'

import {  DownloadIcon, ViewListIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Itemicons from '../../Components/Itemicons'
export default function Latest() {
  return (

    <div className="md:container-lg md:mx-auto h-auto p-1 mb-2  ">

      {/*  */}
      <div className="flex">
        <div className="container ">
          <p className="mx-2 mt-1  font-serif text-xl font-bold  underline"> Latest Apps</p>
        </div>
        <div className="container ">
          {/* <p className="mx-3  font-serif text-2xl font-bold  text-right" onClick={props.changeState}> Back</p>
         */}
         <Link href="/"><a>  <button className="p-1 mx-1 md:mx-3 sm:mx-3 mt-1 px-2  flex items-center justify-center rounded-md bg-black text-white float-right font-serif" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
          </svg>Back</button></a></Link>
        </div>
      </div>
      <div className="sm:grid md:grid-cols-3 xl:grid-cols-4 gap-2  p-1 ">
        <div className="lg:h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1 shadow-xl border-2 border-red-500   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

          <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
          </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
            </div>
            <div className="flex  sm:flex-row justify-between items-center">
              <Itemicons Icon={ViewListIcon} />
              <Itemicons Icon={DownloadIcon} />
            </div>
          </div>

        </div>

        {/* ends here */}
        <div className="h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1 shadow-xl   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

          <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
          </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
            </div>
            <div className="flex  sm:flex-row justify-between items-center">
              <Itemicons Icon={ViewListIcon} />
              <Itemicons Icon={DownloadIcon} />
            </div>
          </div>

        </div>
        {/* ends here */}
        <div className="h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1 shadow-xl   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

          <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
          </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
            </div>
            <div className="flex  sm:flex-row justify-between items-center">
              <Itemicons Icon={ViewListIcon} />
              <Itemicons Icon={DownloadIcon} />
            </div>
          </div>

        </div>
        <div className="lg:h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1 shadow-xl   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

          <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
          </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
            </div>
            <div className="flex  sm:flex-row justify-between items-center">
              <Itemicons Icon={ViewListIcon} />
              <Itemicons Icon={DownloadIcon} />
            </div>
          </div>

        </div>
        {/* endshere */}
        <div className="lg:h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1  shadow-xl   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

          <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
          </div>

          <div className="links rounded-b-lg">
            <div className="text-center p-1">
              <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
            </div>
            <div className="flex  sm:flex-row justify-between items-center">
              <Itemicons Icon={ViewListIcon} />
              <Itemicons Icon={DownloadIcon} />
            </div>
          </div>

        </div>
        {/* ends here */}
         {/* endshere */}
         <div className="lg:h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1  shadow-xl   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

<div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
  <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
</div>

<div className="links rounded-b-lg">
  <div className="text-center p-1">
    <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
  </div>
  <div className="flex  sm:flex-row justify-between items-center">
    <Itemicons Icon={ViewListIcon} />
    <Itemicons Icon={DownloadIcon} />
  </div>
</div>

</div>
{/* ends here */}
 {/* endshere */}
 <div className="lg:h-auto md:w-80 mx-1 my-4 md:my-1 sm:my-1  shadow-xl   cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded-lg ">

<div className="w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
  <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-t-lg" height={1000} width={1920} layout="responsive" />
</div>

<div className="links rounded-b-lg">
  <div className="text-center p-1">
    <p className="p-1 tracking-widest font-serif text-lg font-bold ">Appname</p>
  </div>
  <div className="flex  sm:flex-row justify-between items-center">
    <Itemicons Icon={ViewListIcon} />
    <Itemicons Icon={DownloadIcon} />
  </div>
</div>

</div>
{/* ends here */}
        
      </div>

    </div>





  )
}
