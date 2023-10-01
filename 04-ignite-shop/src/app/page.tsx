import { CardList } from "@/components/CardList";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { ICard } from "@/@types/Card";

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products: ICard[] = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount || 0 / 100,
      defaultPriceId: price.id
    }
  })

  return (
    <CardList products={products}/>
  )
}
