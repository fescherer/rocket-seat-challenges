'use client'

import { ICard, ICardShopping } from '@/@types/Card'
import React, { PropsWithChildren } from 'react'

type ShoppingCarContextType = {
  carItems: ICardShopping[]
  addItem: (item: ICard) => void
  removeItem: (item: ICardShopping) => void
}

export const ShoppingCarContext =
  React.createContext<ShoppingCarContextType>({
    carItems: [],
    addItem: () => null,
    removeItem: () => null
  })

export const ShoppingCarProvider = ({ children }: PropsWithChildren) => {
  const [carItems, setCarItems] = React.useState<ICardShopping[]>([])

  function addItem(item: ICard) {
    setCarItems(prev => {
      let hasIndex: boolean = false
      const newArray = prev.map(itemCar => {
        if(itemCar.id === item.id) {
          hasIndex = true
          return {...itemCar, quantity: itemCar.quantity + 1}
        } else return itemCar
      })

      if(!hasIndex) return [...prev, {id: item.id, quantity: 1, product: item}]
      else return newArray
    })
  }

  function removeItem(item: ICardShopping) {
    setCarItems(prev => {
      let isQuantityZero: boolean = false
      const newArray = prev.map(itemCar => {
        if(itemCar.id === item.id) {
          if(itemCar.quantity === 1) isQuantityZero = true
          return {...itemCar, quantity: itemCar.quantity - 1}
        } else return itemCar
      })
      if(isQuantityZero) return prev.filter(itemCar => itemCar.id !== item.id)

      return newArray
    })
  }

  return (
    <ShoppingCarContext.Provider value={{ carItems, addItem, removeItem }}>
      {children}
    </ShoppingCarContext.Provider>
  )
}


