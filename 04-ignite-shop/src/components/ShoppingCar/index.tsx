'use client'

import { useShoppingCarContext, useShoppingCarToggleContext } from "@/contexts"
import { Minus, Plus, X} from "@phosphor-icons/react"
import Image from "next/image"
import { formatPrice } from "../../../util/functions"
import axios from "axios"
import { ICard } from "@/@types/Card"

export function ShoppingCar() {
  const { isToggled, setIsToggled } = useShoppingCarToggleContext()
  const { carItems, addItem, removeItem } = useShoppingCarContext()

  const totalItems = carItems.reduce((acc, carItem) => {
    return acc + carItem.quantity
  }, 0)

  const totalIPrice = carItems.reduce((acc, carItem) => {
    return acc + (carItem.quantity * carItem.product.price)
  }, 0)

  function handleClose() {
    setIsToggled(prev => !prev)
  }

  async function handleBuy() {
    try {
      const items = carItems.map(item => ({
        price: item.product.defaultPriceId,
        quantity: item.quantity
      }))

      const response = await axios.post('/api/checkout', {
        line_items: items
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch(err) {
      alert('Error')
    }

    setIsToggled(prev => !prev)
  }

  if(!isToggled) return <></>

  return (
    <>
      <button onClick={handleClose} className='absolute right-0 top-0 bg-elements opacity-40 z-40 h-full w-full'></button>
      <div className='fixed right-0 top-0 py-6 bg-elements h-full w-1/3 min-w-[360px] p-4 z-50'>
        <button onClick={handleClose} className='absolute top-3 right-3 text-icon hover:text-principal transition-all'>
          <X size={28} />
        </button>



        <div className='flex flex-col pt-8 h-full'>
          <div className='flex-1 flex flex-col gap-6 h-full overflow-auto'>
            {
              carItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="overflow-hidden relative group bg-gradient-to-b from-principal to-[#7465D4] min-w-[100px] rounded flex select-none">
                    <Image className="pointer-events-none" src={item.product.imageUrl} width={100} height={100} alt={`Foto da camisa ${item.product.name}`} />
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-col gap-1 flex-1">
                      <span>{item.product.name}</span>
                      <span className="font-bold text-white text-lg">{formatPrice(item.product.price)}</span>
                    </div>

                    <div className="flex items-center bg-background p-1 w-full rounded">
                      <button onClick={() => removeItem(item)} className="text-principal hover:text-light transition-all">
                        <Minus />
                      </button>
                      <span className="m-auto flex items-center justify-center rounded-xl bg-background text-white">{item.quantity}</span>
                      <button onClick={() => addItem(item.product)} className="text-principal hover:text-light transition-all">
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='flex flex-col w-full gap-10'>
            <div className='flex flex-col gap-1 text-title'>
              <div className='flex justify-between'>
                <span>Quantidade</span>
                <span>{totalItems}{` ${totalItems > 1 ? 'itens' : 'item'}`}</span>
              </div>

              <div className='flex justify-between font-bold text-lg'>
                <span>Valor total</span>
                <span className='text-xl'>{formatPrice(totalIPrice)}</span>
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
