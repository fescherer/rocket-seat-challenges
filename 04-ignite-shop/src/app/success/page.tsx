import { stripe } from "../../../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type CheckoutProps = {
  searchParams: {
    session_id: string
  }
}

export const metadata: Metadata = {
  title: 'Compra efetuada',

  robots: {
    index: false
  }
}

export default async function Checkout({searchParams}: CheckoutProps) {
  try {
    const response = await stripe.checkout.sessions.retrieve(String(searchParams.session_id), {
      expand: ['line_items', 'line_items.data.price.product']
    })

    const lineItems = response?.line_items?.data as Stripe.LineItem[]

    const products = lineItems.map(item => {
      const product = item.price?.product as Stripe.Product
      return {
        name: product.name,
        image: product.images[0],
        id: product.id,
        quantity: item.quantity
      }
    })

    const session = {
      customerName: response.customer_details?.name,
      products: products
    }

    return (
      <div className="flex flex-col items-center gap-5 ">
        <h2>Uhuul <strong>{session.customerName}</strong>, seus produtos já estão a caminho!</h2>
        <div className="max-h-96 overflow-auto flex flex-col gap-6">
          {
            session.products.map(item => (
              <div key={item.id}>
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <div className="overflow-hidden relative group bg-gradient-to-b from-principal to-[#7465D4] rounded flex select-none">
                    <Image src={item.image} width={100} height={100} alt={item.name}/>
                  </div>
                  <span>X{item.quantity}</span>
                </div>
              </div>
            ))
          }
        </div>

        <Link href="/" className="text-principal hover:text-light transition-all">Voltar ao catálogo</Link>
      </div>
    )

  } catch(e) {
    return notFound()
  }
}
