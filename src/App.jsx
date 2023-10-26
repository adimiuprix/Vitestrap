import '@rainbow-me/rainbowkit/styles.css'
import './App.css'
import BoxApp from './components/BoxApp'
import Footer from './components/Footer'
import Header from './components/Header'

import('preline')

function App() {

  return (
    <>
      <Header />
      <BoxApp />
      <Footer />
    </>
  )
}

export default App
