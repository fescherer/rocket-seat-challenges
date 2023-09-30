'use client'

import { useShoppingCarToggleContext } from "@/contexts/ShoppingCarToggle.context.";
import { Bag } from "@phosphor-icons/react";
import Image from "next/image";

export function Header() {
  const {setIsToggled} = useShoppingCarToggleContext()

  function handleToggle() {
    setIsToggled(prev => !prev)
  }

  return (
    <header className="flex justify-between items-center pb-10 text-text">
      <Image width={130} height={52} alt="Logo Ignite Shop" src="./Logo.svg"></Image>

      <button onClick={handleToggle} className="bg-elements p-2 relative rounded hover:text-white transition-all group">
        <Bag size={24} />

        <span className="border-background rounded-full group-hover:bg-light transition-all bg-principal w-6 h-6 flex justify-center items-center text-xs text-white absolute -top-2 -right-2">1</span>
      </button>
    </header>
  )
}
