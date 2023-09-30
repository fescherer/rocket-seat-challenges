'use client'

import { ICard } from "@/@types/Card";
import Image from "next/image";
import {Bag} from '@phosphor-icons/react'

interface CardProps  {
  item: ICard
}

export function Card({item}: CardProps) {
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(item.price / 100)

  return (
    <div className="overflow-hidden relative group bg-gradient-to-b from-principal to-[#7465D4] min-w-[300px] rounded flex select-none">
      <Image className="pointer-events-none" src={`/shirts/${item.image}.png`} width={520} height={480} alt={`Foto da camisa ${item.name}`} />

     <footer className="flex justify-between absolute bottom-0 w-[calc(100%-1rem)] bg-card translate-y-full group-hover:translate-y-0 transition-transform rounded p-4 mx-2">
        <div className="flex flex-col text-base text-white">
          <span>{item.name}</span>
          <span className="text-principal font-bold text-lg">{price}</span>
        </div>
        <button className="text-text p-2 rounded transition-all hover:text-white bg-principal hover:bg-light"><Bag size={24}/></button>
      </footer>
    </div>
  )
}
