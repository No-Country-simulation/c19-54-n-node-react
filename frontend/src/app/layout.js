import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400', '700'] })

export const metadata = {
  title: 'ARtesano E-commerce',
  description: 'Portal de venta de artesanías'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
