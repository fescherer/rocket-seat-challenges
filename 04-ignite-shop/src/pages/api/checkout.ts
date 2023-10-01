import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { line_items } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!line_items) {
    return res.status(400).json({ error: 'Price not found.' });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: line_items,
    success_url: `${process.env.SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.SITE_URL
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
