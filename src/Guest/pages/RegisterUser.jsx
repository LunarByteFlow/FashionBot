import axios from 'axios'
import { logincontext } from '../../GlobalContext/context'
import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import LogoImage from '../../images/logo.jpg'



import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

export default function RegisterUser() {


    const { state, dispatch } = useContext(logincontext)
    //for form
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ContactNo, setContactNo] = useState("")



    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { Email, Password, Username, ContactNo }


        axios.post('http://localhost:1234/api/register', payload)
            .then((json) => {
                console.log(json.data)

                Cookies.set('token', json.data.token)        //cookies main token ki value api se jo arahi wo set krdi

                dispatch({
                    type: "LOGIN_USER",
                    token: json.data.token   //dipqtch ki ha token ki value
                })

                Swal.fire({
                    title: 'Account Created',
                    text: 'Thank you for Opening Account',
                    confirmButtonText: 'Continue '
                })
            }

            )
            .catch(err => console.log(err))
    }


    return (
        (
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">
                                <img src={LogoImage}
                                    style={{ width: '185px' }} alt="logo" className='rounded-circle' />
                                <h4 className="mt-1 mb-5 pb-1">We are The Preloved Threads</h4>
                            </div>

                            <p className='text-center'>Please Sign up and make your account</p>


                            {/* yaha hum form laga skty */}
                            <div className="flip-card__back">
                                <div className="title my-2">Username</div>
                                <form className="flip-card__form" onSubmit={SignupUser}>
                                    <input
                                        className="flip-card__input"
                                        placeholder="Name"
                                        type="name"
                                        value={Username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <div className="title my-2">Email Address:</div>

                                    <input
                                        className="flip-card__input"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="title my-2">Contact Number:</div>

                                    <input
                                        className="flip-card__input"
                                        name="ContactNo"
                                        placeholder="ContactNo"
                                        type="ContactNo"
                                        value={ContactNo}
                                        onChange={(e) => setContactNo(e.target.value)}
                                    />

                                    <div className="title my-2">Set your Password:</div>

                                    <input
                                        className="flip-card__input"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div>

                                        <button className="flip-card__btn my-2">Confirm!</button>
                                    </div>
                                </form>
                            </div>


                        </div>

                    </MDBCol>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 className="mb-4 text-dark">We are more than just an online marketplace!</h4>
                                <p className="small mb-0 text-dark">"We are more than just a marketplace; you can elevate your entrepreneurial journey by opening your own boutique through our platform."enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        )
    )
}

