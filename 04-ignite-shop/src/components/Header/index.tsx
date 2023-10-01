'use client'

import { useShoppingCarContext, useShoppingCarToggleContext } from "@/contexts";
import { Bag } from "@phosphor-icons/react";
import Image from "next/image";

export function Header() {
  const {setIsToggled} = useShoppingCarToggleContext()
  const { carItems } = useShoppingCarContext()

  function handleToggle() {
    setIsToggled(prev => !prev)
  }

  const totalItems = carItems.reduce((acc, carItem) => {
    return acc + carItem.quantity
  }, 0)

  return (
    <header className="flex justify-between items-center p-2 px-4 text-text fixed top-0 z-30 w-full bg-background">
      <Image width={130} height={52} alt="Logo Ignite Shop" src="./Logo.svg"></Image>

      <button onClick={handleToggle} className="bg-elements p-2 relative rounded hover:text-white transition-all group">
        <Bag size={24} />

        <span className="border-background rounded-full group-hover:bg-light transition-all bg-principal w-6 h-6 flex justify-center items-center text-xs text-white absolute -top-2 -right-2">{totalItems}</span>
      </button>
    </header>
  )
}
