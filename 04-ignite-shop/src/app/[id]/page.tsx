import { stripe } from "../../../lib/stripe";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { ICard } from "@/@types/Card";
import { Product } from "@/components/Product";

type ProductPageProps = {
  params: {
    id: string
  }
}

export async function generateMetadata(
  { params}: ProductPageProps,
) {
  try {
    const product = await stripe.products.retrieve(params.id);

    return {
      title: product.name,
      description: product.description
    }
  } catch(e) {
    return {
      title: 'Not found'
    }
  }

}


export default async function ProductPage({params}: ProductPageProps) {
  try {
    const response = await stripe.products.retrieve(params.id, {
      expand: ['default_price']
    });

    if(!response) return notFound()

    const price = response.default_price as Stripe.Price;

    const product: ICard = {
      id: response.id,
      name: response.name,
      imageUrl: response.images[0],
      price: price.unit_amount || 0,
      description: response.description || '',
      defaultPriceId: price.id
    }

    return (
      <Product product={product}/>
    )

  } catch(e) {
    return notFound()
  }
}
