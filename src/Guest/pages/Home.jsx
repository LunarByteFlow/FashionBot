import React from 'react'
import RecentAd from '../components/RecentAd'
import Navcategory from '../components/Navcategory'
import Footer from '../../User/components/Footer'

export default function Home() {
  return (
    <>
{/* main image */}
      {/* <div style={{width:'100%'}} className='backgroundcolor'>
        <img src={img1} alt="" className='img-fluid' style={{width:'100%'}}/>
      </div> */}
      <Navcategory/>
      <RecentAd />
      <Footer/>

    </>
  )
}
