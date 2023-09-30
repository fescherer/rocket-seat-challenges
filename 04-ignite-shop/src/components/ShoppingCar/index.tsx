'use client'

import { useShoppingCarToggleContext } from '@/contexts/ShoppingCarToggle.context.';
import {X} from "@phosphor-icons/react"

export function ShoppingCar() {
  const {isToggled, setIsToggled} = useShoppingCarToggleContext()

  function handleClose() {
    setIsToggled(prev => !prev)
  }

  function handleBuy() {
    setIsToggled(prev => !prev)
  }

  if(!isToggled) return <></>

  return (
    <>
      <button onClick={handleClose} className='absolute right-0 top-0 bg-elements opacity-40 h-full w-full'></button>
      <div className='absolute right-0 top-0 py-6 bg-elements h-full w-1/3 min-w-[360px] p-4'>
        <button onClick={handleClose} className='absolute top-3 right-3 text-icon hover:text-principal transition-all'>
          <X size={28} />
        </button>



      <div className='flex flex-col pt-8 h-full'>
        <div className='flex-1'>
          card
        </div>

        <div className='flex flex-col w-full gap-10'>
          <div className='flex flex-col gap-1 text-title'>
            <div className='flex justify-between'>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>

            <div className='flex justify-between font-bold text-lg'>
              <span>Valor total</span>
              <span className='text-xl'>R$ 270,00</span>
            </div>
          </div>
          <button onClick={handleBuy} className='bg-principal w-full p-4 rounded-md transition-all hover:bg-light'>
            Finalizar compra
          </button>
        </div>
      </div>

      </div>
    </>
  )
}
