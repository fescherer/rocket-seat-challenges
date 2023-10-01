'use client'

import Image from "next/image"
import { formatPrice } from "../../../util/functions"
import { ICard } from "@/@types/Card"
import { useShoppingCarContext } from "@/contexts"
import { ArrowLeft } from "@phosphor-icons/react"
import Link from "next/link"

type ProductProps = {
  product: ICard
}

export function Product({product}: ProductProps) {
  const {addItem} = useShoppingCarContext()

  function handleAddItem() {
    addItem(product)
  }

  return (
    <>
      <Link href="/" className="flex gap-4 items-center py-5 hover:text-white transition-all"><ArrowLeft /> Voltar aos produtos</Link>
      <div className="min-h-full flex gap-6 flex-col md:flex-row">
        <Image src={product.imageUrl} width={300} height={300} alt={product.description ?? ''} className="overflow-hidden relative group bg-gradient-to-b from-principal to-[#7465D4] min-w-[300px] rounded flex select-none w-full" />

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">{product.name}</h1>

          <strong className="text-xl text-principal font-normal">{formatPrice(product.price)}</strong>

          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio blanditiis, porro, accusantium saepe itaque asperiores sapiente vero tempora debitis nam quo, hic id placeat eaque maxime ratione? Mollitia, quisquam.
            {product.description}
          </p>

          <button onClick={handleAddItem} className="bg-principal p-4 rounded hover:text-white hover:bg-light transition-all w-full">Adicionar ao carrinho</button>
        </div>
      </div>
    </>
  )
}
