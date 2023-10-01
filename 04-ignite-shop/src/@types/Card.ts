export interface ICard {
  id: string,
  name: string,
  imageUrl: string,
  price: number
  defaultPriceId: string
  description?: string
}

export interface ICardShopping {
  id: string,
  quantity: number,
  product: ICard
}
