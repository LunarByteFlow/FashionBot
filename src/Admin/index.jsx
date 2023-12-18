import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Ads from './pages/Ads'
import { Routes, Route } from 'react-router-dom'

export default function Admin() {
  return (
  
    <div className="row">
      <div className="col-md-3 m-0 p-0 border border-secondary" style={{ height: '100vh' }}><Sidebar /></div>
      <div className="col-md-9">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/ads" element={<Ads />} />
        </Routes>
      </div>
    </div>


    
  )
}
