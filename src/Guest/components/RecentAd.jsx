import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import RecentAdCard from './RecentAdCard'






export default function RecentAd() {
const [ad,setad]=useState([])



// hitting api and applying useEffect, so that whenever component refresh we will get our updated category
useEffect(()=>{
    axios.get('http://localhost:1234/api/get-all-ads')
    .then((json)=>setad(json.data.Ads))
    .catch((error)=>console.log(error))
 },[])


    return (
        <>
            {/* ek container */}
            <section >

            <div className="container">
                <div className="text-center my-5">
                    <h3 className='font-weight-bold'>Recent Ads</h3>
<hr />
                </div>
                <div className="row">
                 {
                     ad.map((ad,index)=>
                     <RecentAdCard key={index} Name={ad.AdName} image={ad.AdImage} />
                     )
                    } 
                </div>
            </div>
                    </section>
        </>
    )
}
