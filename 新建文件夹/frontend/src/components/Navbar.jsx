import React from 'react'
import { Link } from 'react-router-dom'
import { connectWallet, getAccount } from '../utils/chainClient'

export default function Navbar(){
  const [addr, setAddr] = React.useState(null)

  React.useEffect(()=>{
    getAccount().then(a=>setAddr(a)).catch(()=>{})
  },[])

  async function onConnect(){
    try{
      const a = await connectWallet()
      setAddr(a)
    }catch(e){
      alert('连接失败: ' + e.message)
    }
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">渡渡一键发币平台</Link>
          <Link to="/create" className="text-sm">创建代币</Link>
        </div>
        <div>
          {addr ? <span className="text-sm">{addr}</span> : <button onClick={onConnect} className="btn">连接钱包</button>}
        </div>
      </div>
    </nav>
  )
}
