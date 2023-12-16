import React from 'react'
import { Link } from 'react-router-dom'

export default function BoutiqueCard({ boutiqueName, boutiqueImage }) {
    return (
        <>

            <div className="col-md-3">
                <Link to={`/${boutiqueName.split(' ').join('-')}`} className='text-decoration-none'>
                    <div className="card" >
                        <img src={boutiqueImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                {boutiqueName}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>



        </>
    )
}
