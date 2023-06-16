import React, { ReactNode, createContext, useContext, useState } from 'react'
import { CoffeeList } from '../@types/Coffee'
import expresso from '../assets/coffee/expresso.png'

type ShoppingContextType = {
  coffeeList?: CoffeeList[]
  setCoffeeList?: React.Dispatch<React.SetStateAction<CoffeeList[]>> | any
  removeCoffeeFromList: (id: number) => void
  addCoffeeQuantity: (id: number) => void
  reduceCoffeeQuantity: (id: number) => void
}

export const ShoppingContext = createContext<ShoppingContextType>({
  coffeeList: [],
  setCoffeeList: () => null,
  removeCoffeeFromList: () => null,
  addCoffeeQuantity: () => null,
  reduceCoffeeQuantity: () => null
})

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [coffeeList, setCoffeeList] = useState<CoffeeList[]>([
    {
      coffee: {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        tags: ['traditional'],
        image: expresso
      },
      quantity: 3,
      id: 1
    }
  ])

  function removeCoffeeFromList(id: number) {
    setCoffeeList((prev) => prev.filter((coffee) => coffee.id !== id))
  }

  function addCoffeeQuantity(id: number) {
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
