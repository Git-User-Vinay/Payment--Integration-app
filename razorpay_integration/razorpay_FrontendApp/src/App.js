import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(500);

  const complete_payment = (payment_id, order_id, signature )=> {
    axios.post('http://127.0.0.1:8000/razorpay/order/complete/', {
        "payment_id": payment_id,
        "order_id": order_id,
        "signature": signature,
        "amount": amount,
  })
  .then((response)=>{
    console.log(response.data); 
  })
  .catch((error)=>{
    console.log(error.response);
  })
  }
  const razorPayPayment = () => {
    axios.post('http://127.0.0.1:8000/razorpay/order/create/', {
      amount: amount,
      currency: "INR",
    })
    .then(function (response) {
      const order_id = response.data.data.id;

      const options = {
        key: "replace_key_id", // Enter the Key ID generated from the Dashboard
        name: "Test Corp",
        description: "Test Transaction",
        image: "your_logo",
        order_id: order_id, 
        handler: function (response) {
          alert("Payment ID: " + response.razorpay_payment_id);
          alert("Order ID: " + response.razorpay_order_id);
          alert("Signature: " + response.razorpay_signature);
          complete_payment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          )
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert("Error Code: " + response.error.code);
        alert("Description: " + response.error.description);
        alert("Source: " + response.error.source);
        alert("Step: " + response.error.step);
        alert("Reason: " + response.error.reason);
        alert("Order ID: " + response.error.metadata.order_id);
        alert("Payment ID: " + response.error.metadata.payment_id);
      });

      rzp1.open();
    })
    .catch(function (error) {
      console.error("Error creating Razorpay order: ", error);
    });
  };

  return (
    <div className="container mt-5 rounded p-5 bg-warning" style={{ width: "28%" }}>
      <h1 className="text-center fw-bold display-3">$500</h1>
      <p className="text-center">per year</p>
      <h3 className="fw-semibold text-center">Basic</h3>
      <ul style={{ fontSize: "14px" }}>
        <li>1 custom domain e.g. mydomain.com</li>
        <li>Media library backup</li>
        <li>Automated image analysis reports with Performance Center</li>
        <li>One-time 30-minute consultation with a media optimization expert</li>
        <li>Live chat & 12-hr SLA support tickets</li>
        <li>5 user accounts with role-based permissions</li>
      </ul>
      <div className="mt-3 d-grid">
        <button type="button" onClick={razorPayPayment} className="btn btn-light py-3 fw-semibold">Upgrade Now</button>
      </div>
    </div>
  );
}

export default App;
