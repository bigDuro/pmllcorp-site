import RootLayout from '../layout/index';
import '../globals.css'

function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  ); 
}

export default App