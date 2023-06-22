import React, { ReactNode, createContext, useContext, useState } from 'react'
import { CoffeeList, ShopInfo } from '../@types/Coffee'

type ShoppingContextType = {
  coffeeList?: CoffeeList[]
  setCoffeeList?: React.Dispatch<React.SetStateAction<CoffeeList[]>> | any
  shopInfo?: ShopInfo
  setShopInfo?: React.Dispatch<React.SetStateAction<ShopInfo | undefined>> | any
  removeCoffeeFromList: (id: number) => void
  addCoffeeQuantity: (id: number) => void
  reduceCoffeeQuantity: (id: number) => void
}

export const ShoppingContext = createContext<ShoppingContextType>({
  coffeeList: [],
  shopInfo: undefined,
  setShopInfo: () => null,
  setCoffeeList: () => null,
  removeCoffeeFromList: () => null,
  addCoffeeQuantity: () => null,
  reduceCoffeeQuantity: () => null
})

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [coffeeList, setCoffeeList] = useState<CoffeeList[]>([])

  const [shopInfo, setShopInfo] = useState<ShopInfo | undefined>()

  function removeCoffeeFromList(id: number) {
    setCoffeeList((prev) => prev.filter((coffee) => coffee.id !== id))
  }

  function addCoffeeQuantity(id: number) {
    console.log(coffeeList, id)
    setCoffeeList((prev) =>
      prev.map((coffee) => {
        if (id === coffee.id)
          return { ...coffee, quantity: coffee.quantity + 1 }
        else return coffee
      })
    )
  }

  function reduceCoffeeQuantity(id: number) {
    setCoffeeList((prev) =>
      prev.map((coffee) => {
        if (id === coffee.id)
          return { ...coffee, quantity: Math.max(coffee.quantity - 1, 1) }
        else return coffee
      })
    )
  }

  return (
    <ShoppingContext.Provider
      value={{
        coffeeList,
        shopInfo,
        setShopInfo,
        setCoffeeList,
        removeCoffeeFromList: (id: number) => removeCoffeeFromList(id),
        addCoffeeQuantity: (id: number) => addCoffeeQuantity(id),
        reduceCoffeeQuantity: (id: number) => reduceCoffeeQuantity(id)
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingContext = () => useContext(ShoppingContext)
