import React, { useContext, useEffect } from 'react'

// importing bootstrap essentials
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// importing context work
import { logincontext } from '../../GlobalContext/context' 

//importing compoenets
import CartOffCanvas from './CartOffCanvas';


import LogoImage from '../../images/logo.jpg'
import '../../Guest/components/Navigationbar.scss'



export default function Navigationbar() {
    const {state,dispatch} = useContext(logincontext)
    return (
        <Navbar expand="lg" className='navvbar' >
          <div className="container ">
            <Navbar.Brand href="#home" >
              <Link to="/" className="d-flex align-items-center nav-link" >
                <img
                  alt=""
                  src={LogoImage}
                  width="40"
                  height="40"
                  className="d-inline-block align-top rounded-circle"
                />{'  '}
                FashionBot
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form className="d-flex ms-auto me-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav  className='d-flex align-items-center'>
                <Link to="/" className='nav-link'>Post an Ad</Link>
                <Link className='nav-link' to="/cart">Checkout</Link>
                            <CartOffCanvas/>
                            <Link className='nav-link' to="/"><button className='btn btn-outline-dark ' onClick={() => {
                                dispatch({
                                    type: "LOGOUT",
                                })
                                

                            }}>SignOut</button></Link>
    
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      );



   
}




