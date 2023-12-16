import React, { useState, useContext } from 'react'
import axios from 'axios'
import { logincontext } from './../../../GlobalContext/context'
import Cookies from 'js-cookie'
import './loginui.scss'
import LogoImage from '../../../images/logo.jpg'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';

  





export default function LoginForm() {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ContactNo, setContactNo] = useState("")

  const { state, dispatch } = useContext(logincontext)

  const login = (e) => {
    e.preventDefault();
    const payload = {
      Email: Email,
      Password: Password,
      ContactNo: ContactNo

    }

    // console.log(payload)

    axios.post('http://localhost:1234/api/login', payload)
      .then((loginsuccess) => {

        Cookies.set('token', loginsuccess.data.token)        //cookies main token ki value api se jo arahi wo set krdi

        dispatch({
          type: "LOGIN_USER",
          token: loginsuccess.data.token   //dipqtch ki ha token ki value
        })
      })
      .catch((error) => { console.log(error.meesage) })
  }
  return (
    <MDBContainer className="my-5 gradient-form">

  <MDBRow>

    <MDBCol col='6' className="mb-5">
      <div className="d-flex flex-column ms-5">

        <div className="text-center">
          <img src={LogoImage}
            style={{ width: '185px' }} alt="logo" className='rounded-circle'/>
          <h4 className="mt-1 mb-5 pb-1">We are The Preloved Threads!</h4>
        </div>

        <p className='text-center'>Please login to your account</p>


        {/* yaha hum form laga skty */}

        <div className='container'>
          <form onSubmit={login}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputContactNo">ContactNo</label>
              <input
                type="ContactNo"
                className="form-control"
                id="exampleInputContactNo"
                placeholder="ContactNo"
                value={ContactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-secondary my-2">
              Submit
            </button>
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
}





