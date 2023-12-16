import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BoutiqueCard from './BoutiqueCard'



export default function Boutique() {
    // we will hit the api, use effect lagayengy tay jab jab yeh component render ho to brands refresh hojayen
    const [boutique, setboutique] = useState([])



    // hitting api and applying useEffect, so that whenever component refresh we will get our updated category
    useEffect(() => {
        axios.get('http://localhost:1234/api/get-all-brands')
            .then((json) => setboutique(json.data.Boutique))
            .catch((error) => console.log(error))
    }, [])


    return (
        <>

            <div className="container">
                <div className="text-center my-5">
                    <h3>Boutiques</h3>
                    <p>Lorem ipsum dolor, autem repudiandae incidunt consectetur vitae inventore alias ullam eaque praesentium aspernatur, adipisci, odit velit quis animi iste aliquid.</p>
                    <hr />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {boutique.map((value,index)=>
                    <BoutiqueCard   key={index} boutiqueName={value.BoutiqueName} boutiqueImage={value.BoutiqueImage}/>              
                )}
                </div>
                
            </div>
        </>
    )
}
