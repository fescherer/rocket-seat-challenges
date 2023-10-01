'use client'

import { ICard } from "@/@types/Card";
import { Card } from ".."
import { useScrollContainer } from 'react-indiana-drag-scroll';
import SimpleBar from 'simplebar-react';

type CardListProps = {
  products: ICard[]
}

export function CardList({products}: CardListProps) {
  const { ref } = useScrollContainer();

  return (
    <SimpleBar scrollableNodeProps={{ ref }}>
      <div className="flex flex-col md:flex-row gap-4 flex-nowrap">
        {
          products.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </SimpleBar>
  )
}
