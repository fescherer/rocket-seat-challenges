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
