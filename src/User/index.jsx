import React from 'react'


// importing components, pages
import Home from './pages/Home'
import Boutiques from './pages/Boutiques'
import Ads from './pages/Ads'
import Navigationbar from './components/Navigationbar'
import SingleAdDynamic from './pages/SingleAdDynamic'
import Cart from './pages/Cart'
import SingleBoutiqueDynamic from './pages/SingleBoutiqueDynamic'

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


     <Route path="/boutiques" element={<Boutiques />} />
     <Route path="/boutique/:BoutiqueName" element={<SingleBoutiqueDynamic />} />



     
     <Route path="/cart" element={<Cart />} />


     {/* <Route path="*" element={<Page404 />} /> */}


     

</Routes> 




    
    </>
  )
}
