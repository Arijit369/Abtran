import React from 'react'

export default function Payment() {
    const phonePrice = 67999;
  const laptopPrice = 125000;
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

  const displayRazorpay = async (amount) => {
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
        console.log(response)
        alert(response.razorpay_payment_id);
       
        alert("Payment Successfully");
      },
      prefill: {
        name: "Abtaran Appstore",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
         <button onClick={() => displayRazorpay(200)}>
                BUY NOW
              </button> 
    </div>
  )
}
