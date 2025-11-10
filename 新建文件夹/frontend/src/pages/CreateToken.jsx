import React, { useState } from 'react'
import { connectWallet, getSignerForChain, supportedChains } from '../utils/chainClient'
import { ethers } from 'ethers'

export default function CreateToken(){
  const [name, setName] = useState('DODO Token')
  const [symbol, setSymbol] = useState('DODO')
  const [supply, setSupply] = useState('1000000')
  const [chain, setChain] = useState('sepolia')
  const [status, setStatus] = useState('')

  async function onConnect(){
    try{
      await connectWallet()
      setStatus('钱包已连接')
    }catch(e){
      setStatus('连接失败: ' + e.message)
    }
  }

  async function onDeploy(){
    setStatus('准备部署...（注意：此示例不包含合约 bytecode/ABI）')
    // In a real deployment, you'd fetch bytecode/ABI from your backend or use a factory contract.
    // Here we only simulate the steps.
    try{
      const signer = await getSignerForChain(chain)
      if(!signer) throw new Error('未能获取 signer，请确保已连接支持该链的钱包。')
      const address = await signer.getAddress()
      setStatus('已签名地址: ' + address + '（模拟部署完成）')
    }catch(e){
      setStatus('部署失败: ' + e.message)
    }
  }

  return (
    <div className="max-w-2xl bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">创建代币</h2>
      <label className="block">链</label>
      <select className="input" value={chain} onChange={e=>setChain(e.target.value)}>
        {Object.keys(supportedChains).map(k=> <option key={k} value={k}>{supportedChains[k].label}</option>)}
      </select>
      <label className="block">名称</label>
      <input className="input" value={name} onChange={e=>setName(e.target.value)} />
      <label className="block">符号</label>
      <input className="input" value={symbol} onChange={e=>setSymbol(e.target.value)} />
      <label className="block">总量</label>
      <input className="input" value={supply} onChange={e=>setSupply(e.target.value)} />

      <div className="mt-4 flex gap-3">
        <button onClick={onConnect} className="btn">连接钱包</button>
        <button onClick={onDeploy} className="btn">模拟一键部署</button>
      </div>

      {status && <p className="mt-3 text-sm">{status}</p>}

      <div className="mt-4 text-xs text-gray-600">
        注意：要进行真实部署，请在后端提供合约 bytecode/ABI，或部署并使用一个 factory 合约由前端调用。
      </div>
    </div>
  )
}
