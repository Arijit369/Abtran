import Login from "../Screens/Login";
import Link from "next/link";

export default function Admindashboard({user}) {
    return (
        <div >
     
      {user?<>
        {/* <Navigation /> */}
        <div className="container mx-auto p-2">
            <h1 className="p-1 text-center font-serif font-bold text-gray-800 text-2xl drop-shadow-md md:drop-shadow-xl">Welcome {user.displayName} as Admin</h1>
        </div>
      <div className="h-full container mx-auto px-10 lg:px-8 py-2 sm:px-40">
        <div className="lg:grid lg:gap-x-20 md:gap-x-28 lg:grid-cols-3 sm:grid-cols-2 ">
          {/* row 1 */}
          {/* for profile */}
          <div className="p-2   lg:mx-5 mb-10 mt-3 lg:my-5  shadow-lg rounded-lg bg-red-50 bg-opacity-80 hover:bg-red-100 ">
            {/* header */}
            <div className="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" className=" mt-2  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>  <h1 className="mt-2 font-mono text-xl font-bold ">Add Blogs</h1></div>
            {/* header */}
            <p className="mt-2 font-mono text-lg text-red-700 text-justify font-bold p-1">Add Blogs From Here For Marketing And Make the valuable</p>
            {/* buttons stsrts */}
            <div className="flex flex-row  gap-3 mt-2 justify-center ">
            <Link href="Addblogs"><a><h1 className="cursor-pointer text-center   font-mono text-md font-bold bg-blue-100 hover:bg-blue-200 px-2 py-3 rounded-lg">Add Blogs</h1></a></Link>
           
            </div>
            {/* button ends */}
          </div>


          {/* for profile ends */}
          {/* upload app */}
          <div className="  p-2  lg:mx-5 mb-10 mt-3 lg:my-5  shadow-lg rounded-lg bg-indigo-50 bg-opacity-80 hover:bg-indigo-100" >
            {/* header */}
            <div className="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>  <h1 className="mt-1 font-mono text-xl font-bold ">Approve Apps</h1></div>
            {/* text */}
            <p className="mt-2 font-mono text-lg text-red-700 text-justify font-bold p-1">Approve App to abtaran so that the user can download the app  </p>
            {/* header */}
            {/* buttons */}
            <div className="flex flex-row  gap-3 mt-1 justify-center ">
            <Link href="Approve"><a><h1 className="cursor-pointer text-center  font-mono text-md  font-bold bg-purple-300 hover:bg-purple-400 px-2 py-3 rounded-lg flex">Approve Apps
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            
            </h1></a></Link>

            </div>
            {/* buttons end */}
          </div>
          {/* upload app ends */}

          <div className="  p-2  lg:mx-5 mb-10 mt-3 lg:my-5 shadow-lg rounded-lg bg-green-100 bg-opacity-80 hover:bg-green-200">


            {/* header */}
            <div className="flex justify-center "> <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>  <h1 className="mt-2 font-mono text-xl font-bold ">View Approved App</h1></div>
            {/* text */}
            <p className=" mt-1 font-mono text-lg text-red-700 text-justify font-bold  ">You can view all approved uploaded apps uploaded to Abtaran Appstore</p>
            {/* header */}
            {/* buttons */}
            <div className="flex flex-row  gap-3 mt-2 justify-center ">
            <Link href="Approved"><a><h1 className="cursor-pointer text-center  font-mono text-md font-bold bg-indigo-300 hover:bg-indigo-400 px-2 py-3 rounded-lg flex">View Uploaded Apps 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
            
            </h1></a></Link>

            </div>
            {/* buttons end */}

          </div>
          {/* row 1 ends */}
          {/* row 3  */}
          {/* upload app ends */}

          <div className="  p-2  lg:mx-5 mb-10 mt-3 lg:my-5 shadow-lg rounded-lg bg-yellow-100 bg-opacity-80 hover:bg-yellow-200">


            {/* header */}
            <div className="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg> <h1 className="mt-2 font-mono text-xl font-bold ">Latest Contacts </h1></div>
            {/* text */}
            <p className=" mt-1 font-mono text-lg text-red-700 text-justify font-bold  ">You can Read and contact user and answer there queries for abtaran Appstore </p>
            {/* header */}
            {/* buttons */}
            <div className="flex flex-row  gap-3 mt-2 justify-center ">
            <Link href="Contacts"><a><h1 className="cursor-pointer text-center  font-mono text-sm  font-bold bg-indigo-200 hover:bg-indigo-300 px-2 py-3 rounded-lg">Contacts</h1></a></Link>

            </div>
            {/* buttons end */}

          </div>
          {/* row 2 ends */}

          {/* upload app ends */}

          <div className="  p-2  lg:mx-5 mb-10 mt-3 lg:my-5 shadow-lg rounded-lg bg-purple-100 bg-opacity-80 hover:bg-purple-200">


            {/* header */}
            <div className="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>  <h1 className="mt-2 font-mono text-xl font-bold ">All Comments</h1></div>
            {/* text */}
            <p className=" mt-1 font-mono text-lg text-red-700 text-justify font-bold  ">You can read all comments by user in abtaran appstore</p>
            {/* header */}
            {/* buttons */}
            <div className="flex flex-row  gap-3 mt-2 justify-center ">
            <Link href="Comments"><a><h1 className="cursor-pointer text-center  font-mono text-sm  font-bold bg-red-200 hover:bg-red-300 px-2 py-3 rounded-lg">Read Comments</h1></a></Link>

            </div>
            {/* buttons end */}

          </div>

          {/* end */}
          {/* upload app ends */}

          <div className="  p-2  lg:mx-5 mb-10 mt-3 lg:my-5 shadow-lg rounded-lg bg-blue-100 bg-opacity-80 hover:bg-blue-200">


            {/* header */}
            <div className="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>  <h1 className="mt-2 font-mono text-xl font-bold ">All Subscriptions</h1></div>
            {/* text */}
            <p className=" mt-1 font-mono text-lg text-red-700 text-justify font-bold  ">You can view all your uploaded apps uploaded to Abtaran Appstore</p>
            {/* header */}
            {/* buttons */}
            <div className="flex flex-row  gap-3 mt-2 justify-center ">
              <h1 className="cursor-pointer text-center  font-mono text-sm  font-bold bg-red-200 hover:bg-red-300 px-2 py-3 rounded-lg">View Uploaded Apps</h1>

            </div>
            {/* buttons end */}

          </div>
          {/* ends */}
        </div>
      </div>
      </>:<>
      <Login/>

      </>}
     
    </div>
    )
}
