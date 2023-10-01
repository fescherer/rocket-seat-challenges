'use client'

import React, { PropsWithChildren } from 'react'

type ShoppingCarToggleUtilContextType = {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShoppingCarToggleContext =
  React.createContext<ShoppingCarToggleUtilContextType>({
    isToggled: false,
    setIsToggled: () => null
  })

export const ShoppingCarToggleUtilProvider = ({ children }: PropsWithChildren) => {
  const [isToggled, setIsToggled] = React.useState<boolean>(false)

  return (
    <ShoppingCarToggleContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </ShoppingCarToggleContext.Provider>
  )
}


