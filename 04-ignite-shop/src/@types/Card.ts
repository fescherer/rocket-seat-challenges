export interface ICard {
  id: string,
  name: string,
  image: string,
  price: number
}

export interface ICardShopping {
  id: string,
  quantity: number,
  product: ICard
}
