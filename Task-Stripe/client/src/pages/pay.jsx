import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51SCaoNJI124WrCbOIasRsvQuY2mHoxtaoEt49HxFph2F45tfG2Lszf5G0oY4icax27YtWhVfMD9AQaw5DXoigDZQ00kgYuaKdD"); 

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin + "/plans" },
      redirect: "if_required"
    });
    setMsg(error ? (error.message || "Payment failed") : "✅ Payment confirmed.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display:"grid", gap:16 }}>
      <PaymentElement />
      <button className="btn btn-red" disabled={!stripe || loading}>
        {loading ? "Processing…" : "Pay $9.99"}
      </button>
      {msg && <div style={{ color: msg.startsWith("✅") ? "green" : "red" }}>{msg}</div>}
    </form>
  );
}

export default function Pay(){
  const [clientSecret, setClientSecret] = useState("");

  useEffect(()=>{
    fetch("http://localhost:5002/create-payment-intent", { method:"POST" })
      .then(r=>r.json()).then(d=>setClientSecret(d.clientSecret));
  },[]);

  const options = { clientSecret, appearance:{ theme:"stripe" } };

  return (
    <div className="center-screen">
      <div className="card" style={{ maxWidth:520 }}>
        <div className="brand" style={{ marginBottom:10 }}>
          <span className="brand-badge">Premium</span>
          <h2 className="brand-title" style={{ fontSize:22, margin:0 }}>Payment</h2>
        </div>
        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : <div>Loading payment…</div>}
      </div>
    </div>
  );
}
