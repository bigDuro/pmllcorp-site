import { Footer, Header } from './components'
// import './globals.css;

export default function RootLayout({ children }) {
  return (
      <>
        <Header/>
        {children}
        <Footer/>
      </>
  )
}
