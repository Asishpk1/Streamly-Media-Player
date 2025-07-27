import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <div className='d-flex justify-content-center'>
      <Navbar className='mt-4'  data-bs-theme="dark" style={{borderRadius:'50px', backgroundColor:'rgba(40, 53, 99, 1)', width:'95%', boxShadow:'0px 5px 15px 4px'}}>
        <Container>
            <i className="fa-solid fa-forward fa-xl"></i>
          <Navbar.Brand style={{fontSize:'30px',fontWeight:'600'}} href="" className='ms-2 '> <Link to={'/home'} className='text-light text-decoration-none'>Streamly</Link> <span style={{fontSize:'13px',opacity:'0.7',fontWeight:'400'}}>Streaming Just Got a Glow-Up.</span></Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
     </div>
    </>
  )
}

export default Header