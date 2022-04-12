import {useState , useEffect} from 'react'
import { db } from '../../firebase'
export default function Notification({user}) {
  const [loading, setLoading] = useState('');
  const [not , setnot]=useState([])
  const [t , sett]=useState('')
  const currentUserId = user ? user.uid : null;
  useEffect(() => {
    
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Notifications").where('Userid', '==', currentUserId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            id: doc.id,
             // `id` given to us by Firebase
             t:doc.data().time.toDate().toDateString()
            //  sett(app.UpdatedAt.toDate().toDateString())
          });
        });
        setnot(getPostsFromFirebase);
       
        setLoading(false);


      });

    // return cleanup function
    return () => subscriber();
  }, [not, currentUserId, loading]);
  if (loading) {
    setLoading('Lodaing Please wait')
      ;
  }
  return (
    <div>
        <div className="Container p-2 my-3 mx-auto h-screen ">
          <h1 className='font-serif text-2xl font-bold text-center'>All Notifications {not.length}</h1>
          <div className='overflow-y-auto h-3/4 p-5'>
{/* notifications data */}


{
            not.map((i, index) => (  <div className=' p-3 rounded-lg shadow-lg text-gray-800 gap-2 flex flex-row justify-between  my-2'>
              <div className='w-3/4  p-2  text-justify '>
                <h1 className='text-lg font-mono font-semibold text-justify my-1'>{index}. {i.Text}</h1>
              </div>
              <div className=' w-3/12  p-2  '><h1 className='text-sm  font-mono font-semibold text-center my-2 mx-3'>{i.t}</h1></div>
            </div>
            ))}






{/* noification ends up hhere */}






          </div>
        </div>
    </div>
  )
}
