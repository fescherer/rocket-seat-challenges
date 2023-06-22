import React, { ReactNode, createContext, useContext, useState } from 'react'

type Confirm = {
  zip: string
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  state: string
  payment: string
}

type ConfirmationContextType = {
  confirmation: Confirm | null
  setConfirmation: React.Dispatch<React.SetStateAction<Confirm | null>>
}

export const ConfirmationContext = createContext<ConfirmationContextType>({
  confirmation: null,
  setConfirmation: () => null
})

export const ConfirmationProvider = ({ children }: { children: ReactNode }) => {
  const [confirmation, setConfirmation] = useState<Confirm | null>(null)

  return (
    <ConfirmationContext.Provider
      value={{
        confirmation,
        setConfirmation
      }}
    >
      {children}
    </ConfirmationContext.Provider>
  )
}

export const useConfirmationContext = () => useContext(ConfirmationContext)
