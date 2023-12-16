import React from 'react'
import RecentAd from '../components/RecentAd'
import Boutique from '../components/Boutique'
import Navcategory from '../components/Navcategory'

export default function Home() {
  return (
    <>
{/* main image */}
      {/* <div style={{width:'100%'}} className='backgroundcolor'>
        <img src={img1} alt="" className='img-fluid' style={{width:'100%'}}/>
      </div> */}
      <Navcategory/>
      <RecentAd />
      <Boutique />

    </>
  )
}
