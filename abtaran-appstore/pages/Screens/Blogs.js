import {db} from '../../firebase'

export default function Blogs({Allblogs}) {
  
 
    return (
        <div>
          <div className="p-2 bg-gray-100 bg-opacity-50">
           
{
 Allblogs.map((blog, index) => (
 <div key={index}><div className="shadow-lg rounded-lg lg:px-5 py-1 bg-white mt-2 ">
     <div className=" my-2  ">
       <h1 className=" mx-3 text-justify text-2xl font-serif font-bold">Appname:{blog.Name}</h1>

     </div><div className="youtube  p-5 ">

       <iframe className="w-full h-96"
         src={blog.Link}>
       </iframe>
     </div><div className="my-2 p-3">
       <h1 className="text-lg font-mono font-semibold">{blog.Updated_At}</h1>
       <h1 className="text-justify font-mono text-lg text-gray-700">{blog.Description}</h1>
     </div>
   </div><hr className="mt-1" /></div>
                        ))}
          </div>
            
        </div>
    )
}
export async function getServerSideProps(context) {
    const querySnap =await  db.collection('Blogs').orderBy('Updated_At',"desc")
   
    .get()

    const Allblogs =  querySnap.docs.map(docSnap=>{
      return {
        ...docSnap.data(),
        Updated_At:docSnap.data().Updated_At.toDate().toDateString(),
        id:docSnap.id
      }
    })
  
  
    return {
      props: {Allblogs}, // will be passed to the page component as props
    }
  }