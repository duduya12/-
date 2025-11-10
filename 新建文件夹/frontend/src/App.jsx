import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateToken from './pages/CreateToken'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/create" element={<CreateToken/>} />
        </Routes>
      </main>
    </div>
  )
}
