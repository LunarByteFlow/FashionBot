import React from 'react'
import Boutique from '../../Guest/components/Boutique'
import RecentAd from '../../Guest/components/RecentAd'
import Footer from "./../components/Footer"



export default function Home() {
  return (
    <>
    
    {/* main image */}
    <div style={{width:'100%'}} className='backgroundcolor'>
        <img src="" alt="nhg" className='img-fluid' style={{width:'100%'}}/>
      </div>
      <Boutique />
      <RecentAd />
      <Footer/>
    
    </>
  )
}
