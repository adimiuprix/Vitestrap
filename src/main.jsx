import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import module penting dari Rainbowkit dan Wagmi
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { chains, config } from './wagmiConfig.jsx' // Untuk mengkonfigurasi wagmi, semua ada di module ini
import { sepolia } from 'wagmi/chains'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
    <RainbowKitProvider chains={chains} initialChain={sepolia} modalSize='compact' showRecentTransactions={true}>
      <App />
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
