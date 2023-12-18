//REACT BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Link } from 'react-router-dom';
import LogoImage from '../../images/logo.jpg'
import '../components/Navigationbar.scss'


function Navigationbar() {

  return (
    <Navbar expand="lg" className='navvbar' >
      <div className="container ">
        <Link to="/" as={Navbar.Brand} className="d-flex align-items-center nav-link" >
      
                <img
                  alt=""
                  src={LogoImage}
                  width="40"
                  height="40"
                  className="d-inline-block align-top rounded-circle"
                />{'  '}
                FashionBot
      
              </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto me-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3 "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav >
            <Link to="/login" className='nav-link'>Login</Link>
            <Link to="/register" className='nav-link'>Register</Link>
            <Link to="/" className='nav-link'>Post an Ad</Link>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigationbar;