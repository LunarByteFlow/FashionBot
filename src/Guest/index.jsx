import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterUser from './pages/RegisterUser'
import Navigationbar from './components/Navigationbar'


export default function Guest() {
  
return (
<>

<Navigationbar/>
<Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterUser />} />
     <Route path="*" element={<Navigate to="/" replace={true} />} />
</Routes>
</>
  )
}
