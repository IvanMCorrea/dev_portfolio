import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './_components/Sidebar'
import { Providers } from './_components/Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Ivan Correa',
  description: 'Welcome to my Full Stack Developer portfolio! I´m Ivan Correa, and I invite you to explore my expertise in web development, front-end design, back-end programming, and database management. Dive into my projects, witness my skills, and experience my passion for creating user-friendly web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <Sidebar />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
