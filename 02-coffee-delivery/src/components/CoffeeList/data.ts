import expresso from '../../assets/coffee/expresso.png'
import american from '../../assets/coffee/american.png'
import arab from '../../assets/coffee/arab.png'
import capuccino from '../../assets/coffee/capuccino.png'
import creamy from '../../assets/coffee/creamy.png'
import cubano from '../../assets/coffee/cubano.png'
import havaiano from '../../assets/coffee/havaiano.png'
import hotCocoa from '../../assets/coffee/hot-cocoa.png'
import icy from '../../assets/coffee/icy.png'
import irish from '../../assets/coffee/irish.png'
import latte from '../../assets/coffee/latte.png'
import macchiato from '../../assets/coffee/macchiato.png'
import mochaccino from '../../assets/coffee/mochaccino.png'
import withmilk from '../../assets/coffee/withmilk.png'
import { CoffeeType } from '../../@types/Coffee'

export const coffees: CoffeeType[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 2.0,
    tags: ['traditional'],
    image: expresso
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 4.0,
    tags: ['traditional'],
    image: american
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 4.5,
    tags: ['traditional'],
    image: creamy
  },

  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.0,
    tags: ['traditional', 'icy'],
    image: icy
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.0,
    tags: ['traditional', 'milky'],
    image: withmilk
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8.5,
    tags: ['traditional', 'milky'],
    image: latte
  },

  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['traditional', 'milky'],
    image: capuccino
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 10.0,
    tags: ['traditional', 'milky'],
    image: macchiato
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 11.0,
    tags: ['traditional', 'milky'],
    image: mochaccino
  },

  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 12.0,
    tags: ['special', 'milky'],
    image: hotCocoa
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12.5,
    tags: ['special', 'alcoholic', 'icy'],
    image: cubano
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 12.8,
    tags: ['special'],
    image: havaiano
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 14.0,
    tags: ['special'],
    image: arab
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 15.0,
    tags: ['special', 'alcoholic'],
    image: irish
  }
]
