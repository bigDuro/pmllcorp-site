import { Footer, Header } from './layout/components'
import './globals.css'

export const metadata = {
  title: 'Peoples Mortgage Lending LLC',
  description: 'As a fast growing mortgage banker in the United States, we opened our doors in 2021 and have since expanded with many community based branches across the nation. Headquartered in Cincinatti, OH, Peoples Mortgage Lending LLC built its reputation as an outstanding mortgage banking firm by serving the lending needs of real estate professionals, builders, and individual homebuyers throughout the United States.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
