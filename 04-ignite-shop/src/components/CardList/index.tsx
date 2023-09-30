'use client'

import { Card } from ".."
import { useScrollContainer } from 'react-indiana-drag-scroll';
import SimpleBar from 'simplebar-react';

const data = [
  {
    id: '1',
    name: 'Beyond the limits',
    image: 'plus',
    price: 7990
  },
  {
    id: '2',
    name: 'Explorer',
    image: 'explorer',
    price: 8990
  },
  {
    id: '3',
    name: 'Ignite Lab',
    image: 'ignite-lab',
    price: 10990
  },
  {
    id: '4',
    name: 'Igniter',
    image: 'igniter',
    price: 7990
  },
  {
    id: '5',
    name: 'Maratona',
    image: 'maratona',
    price: 7990
  }
]

export function CardList() {
    const { ref } = useScrollContainer();

  return (
    <SimpleBar scrollableNodeProps={{ ref }}>
      <div className="flex flex-col md:flex-row gap-4 flex-nowrap">
        {
          data.map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </SimpleBar>
  )
}
