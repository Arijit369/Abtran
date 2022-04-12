import {  useRouter  } from "next/router"
import { db , serverTimestamp } from "../../firebase";
import Image from 'next/image'
import { useState , useEffect } from "react";
import Footer from "../../Components/Footer";
export default function Cart({user}) {
    const router = useRouter()
    const [loading, setLoading] = useState(true);
    const [txnid , settxnid]=useState("")
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
            .collection("usercart").where("user_id",'==',user.uid)
            // .collection("Approved").where("Category",'==',props.filtername)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(), //spread operator'UpdatedAt',"desc"
                        id: doc.id, // `id` given to us by Firebase
                        key: doc.id
                    });
                });

                setApps(getPostsFromFirebase);

                setLoading(false);


            });
        return () => subscriber();
    }, [apps]);
    if (loading) {
        return <div className="h-full p-5 flex justify-center"><p className='text-center text-xl font-serif font-bold tracking-widest'>Please Wait Loading Content</p></div>
            ;
    }
//    payment gateway

var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount , id) => {
     
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_F9ExcNT7bwNkvU",
      currency: "INR",
      amount: amount * 100,
      name: "Abtaran Appstore",
      description: "Thanks for subscribing us",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
       
        db.collection("usercart").doc(id).update({Payment: "Done" , Txnid:`${response.razorpay_payment_id}` });
       
        alert('payment successfull thanks for subscribing the app');
       

      },
      prefill: {
        name: "Abtaran Appstore",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const Delete =(id)=>{
    console.log(id)
    db.collection("usercart").doc(id).delete().then(()=>{
    setwarning('item deleted')
    }).catch((err)=>{
      console.log(err)
    })
   
  }
  return (
    <><div className="font-sans antialiased  bg-cover h-full " style={{ background: "url('https://source.unsplash.com/1L71sPT5XKc')" }}>
     <div className="bg-white opacity-75">
     <nav className="sticky  nv bg-opacity-90 w-full z-10 ">
        <div className="flex p-1  gap-3 text-lg  flex-row justify-between ">

          {/* <h2 onClick={openNav} className=" nv px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row" ><MenuIcon className='h-7' />Browse</h2> */}
          <h2 onClick={() => router.push('/Screens/Paid')} className="border-2 border-white px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row">Home</h2>

          <h2 onClick={() => router.push('/Screens/Cart')} className=" border-2 border-white px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row">My Cart</h2>
          <h2 onClick={() => router.push('/Screens/Orders')} className=" border-2 border-white px-2 py-1 rounded-md cursor-pointer text-lg my-2 font-serif transition duration-100 mt-2  transform  text-gray-200 hover:font-bold active:text-red-500 flex flex-row">My Orders</h2>

        </div>

      </nav>
      <div className='container m-auto flex flex-col items-center justify-center my-5 p-1 '>
        {apps.map((i, index) => (
          <>
            {i.Payment == "Pending" ? <>

              {i.status == "Active" ? <>
                <div className='lg:w-2/3 bg-blue-100 w-full flex h-auto lg:flex-row flex-col shadow-lg rounded-lg my-2'>
                  <div className='lg:w-1/4 w-full h-auto '>
                    <img className="lg:h-full h-full w-full object-contain scale-105" src={i.Image2}></img>

                  </div>
                  <div className='lg:w-3/4 w-full p-2'>
                    <div className="flex justify-between">
                      <h1 className="px-3 py-3 text-gray-800 font-serif text-xl font-bold text-center">Appname: {i.Appname}</h1>
                      <h1 className="px-3 py-3 text-gray-800 font-serif text-lg font-bold text-center">Price: {i.price}</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1 onClick={() => displayRazorpay(`${i.price} `, `${i.id}`)} className=" px-3 my-1 rounded-lg py-2 text-gray-100 font-serif text-lg font-bold text-center cursor-pointer bg-blue-500">BuyNow</h1>
                      <h1 onClick={() => Delete(`${i.id}`)} className="px-3 py-3 text-blue-800 font-serif text-lg font-bold text-center cursor-pointer">Delete</h1>
                    </div>
                  </div>
                </div>

              </> : <></>}
            </> : <></>}</>
        ))}
      </div>


     </div>
    </div><Footer /></>
  )
}
