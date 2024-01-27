import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Nav from '@components/Nav';
import '@styles/global.css'

//const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nebula Logix',
  description: 'The Cloud Solution for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}


