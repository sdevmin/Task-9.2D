import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Allow the Vite dev client
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Create a PaymentIntent for Premium plan ($9.99 AUD)
app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 999, // cents
      currency: "aud",
      automatic_payment_methods: { enabled: true },
      description: "DEV@Deakin Premium Plan"
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Stripe error" });
  }
});

const PORT = Number(process.env.PORT) || 5002;
app.listen(PORT, () => {
  console.log(`🔌 Server on http://localhost:${PORT}`);
});
