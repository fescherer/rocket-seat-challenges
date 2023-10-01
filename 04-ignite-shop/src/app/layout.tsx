import { Header, ShoppingCar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ShoppingCarToggleUtilProvider } from '@/contexts/ShoppingCarToggle.context.'
import 'react-indiana-drag-scroll/dist/style.css'
import 'simplebar-react/dist/simplebar.min.css';
import { ShoppingCarProvider } from '@/contexts/ShoppingCar.context'

const roboto = Roboto({
  weight: ['900', '700', '500', '400', '300', '100'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Rocketseat challenge 04 - NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`max-w-7xl m-auto flex h-full flex-col bg-background scroll-smooth cursor-default text-text relative ${roboto.className}`}>
        <ShoppingCarToggleUtilProvider>
          <ShoppingCarProvider>
            <Header />

            <main className='py-16 px-4'>
              {children}
            </main>

            <ShoppingCar />
          </ShoppingCarProvider>
        </ShoppingCarToggleUtilProvider>
      </body>
    </html>
  )
}
