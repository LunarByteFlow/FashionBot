import React from 'react'


// importing components, pages
import Home from './pages/Home'
import Ads from './pages/Ads'
import Navigationbar from './components/Navigationbar'
import SingleAdDynamic from './pages/SingleAdDynamic'

//import routing 
import {Route,Routes} from 'react-router-dom'


export default function User() {
  return (
    <>
<Navigationbar/>    
<Routes>
     <Route path="/login" element={<Home />} />
     <Route path="/" element={<Home />} />


     <Route path="/ads" element={<Ads />} />
     <Route path="/get-product-by-id/:_id" element={<SingleAdDynamic />} />


     

     {/* <Route path="*" element={<Page404 />} /> */}


     

</Routes> 




    
    </>
  )
}
