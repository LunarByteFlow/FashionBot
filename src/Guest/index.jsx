import React from 'react'
import { Route,Routes, } from "react-router-dom";
import Home from './pages/Home';


function index() {
  return (
   
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog/*" element={<BlogApp />} /> */}
        {/* <Route path="/users/*" element={<UserApp />} /> */}
    </Routes>
    
  ) 
}

export default index