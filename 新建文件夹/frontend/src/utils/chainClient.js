import { ethers } from 'ethers'
import { Connection, clusterApiUrl } from '@solana/web3.js'

// Supported chains and labels
export const supportedChains = {
  sepolia: { label: 'Ethereum Sepolia', type: 'evm' },
  bscTest: { label: 'BSC Testnet', type: 'evm' },
  baseSepolia: { label: 'Base Sepolia', type: 'evm' },
  arbSepolia: { label: 'Arbitrum Sepolia', type: 'evm' },
  solana: { label: 'Solana Devnet', type: 'sol' },
}

// Connect wallet using window.ethereum (MetaMask) for EVM chains
export async function connectWallet(){
  if(typeof window === 'undefined') throw new Error('非浏览器环境')
  if(window.ethereum){
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    return (await window.ethereum.request({ method: 'eth_accounts' }))[0]
  }
  // For Solana, user can connect Phantom inside the app flow (not implemented here)
  throw new Error('请安装 MetaMask 或 使用支持的浏览器钱包')
}

export async function getAccount(){
  if(typeof window === 'undefined' || !window.ethereum) return null
  const accounts = await window.ethereum.request({ method: 'eth_accounts' })
  return accounts[0] || null
}

// Returns a signer configured for the chosen chain.
export async function getSignerForChain(chainKey){
  if(chainKey === 'solana'){
    // Solana uses different provider
    if(window.solana && window.solana.isPhantom){
      await window.solana.connect()
      return window.solana
    }
    throw new Error('请安装 Phantom 或其他 Solana 钱包并允许连接')
  }

  // For EVM chains, attempt to use injected provider and switch network if RPC known
  if(!window.ethereum) throw new Error('未检测到 EVM 注入钱包 (MetaMask)')
  const provider = new ethers.BrowserProvider(window.ethereum)
  // Optionally you can programmatically request network switch here (not enforced)
  const signer = await provider.getSigner()
  return signer
}
