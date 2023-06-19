export type CoffeeType = {
  id: number
  name: string
  description: string
  price: number
  tags: CoffeeCaracteristics[]
  image: string
}

type CoffeeCaracteristics =
  | 'traditional'
  | 'icy'
  | 'milky'
  | 'special'
  | 'alcoholic'

export enum CoffeeEnum {
  traditional = 'TRADICIONAL',
  icy = 'GELADO',
  milky = 'COM LEITE',
  special = 'ESPECIAL',
  alcoholic = 'ALCOÓLICO'
}

export type CoffeeList = {
  id: number
  coffee: CoffeeType
  quantity: number
}

export type ShopInfo = {
  number: string
  neighborhood: string
  zip: string
  street: string
  complement: string
  state: string
  city: string
  payment: 'credit-card' | 'debit-card' | 'money'
}
