import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function Footer() {

    const [selected, setSelected] = useState('btnradio1');
    const [darkMode, setDarkMode] = useState(false);
    
      // To toggle Dark Mode
      const toggleTheme = () => {
        const theme = darkMode ? 'light' : 'dark';
        document.body.setAttribute('data-bs-theme', theme);
        setDarkMode(!darkMode);
      };

  return (
    <>
    <div className='breadcrumb' style={{ borderRadius:'50px'}}>
        <div className='d-flex justify-content-around p-4' style={{borderTop:'solid', borderRadius:'50px'}}>

        {/* Streamly Section   */}
        <div className='' style={{width:'35%'}}>
           <Link className='text-decoration-none' to={'/'}>
            <i style={{fontSize:'30px', fontWeight:'600'}} className="fa-solid fa-forward"></i>
            <span className='ms-3' style={{fontSize:'30px', fontWeight:'600'}}>Streamly</span>
           </Link> <br /> <br />
            <p style={{textAlign:'justify', marginTop:'-8px'}}>Streamly is a sleek online video player that lets you instantly watch videos by pasting a link—no downloads, no hassle. <span className='footerSen'>Stream content seamlessly and save your favorites to a personal library for easy access anytime. Streamly offers fast, organized, and effortless streaming.</span> </p>
            <p >Code licensed by Asish</p>
            <p >Currently v2.1.4</p>
        </div>

        {/* Links Section */}
        <div style={{width:'10%',textAlign:'center'}}>
            <h5>Links</h5> <br />
            <Link style={{textDecoration:'none'}} to={'/'}>Landing</Link> <br />
            <Link style={{textDecoration:'none'}} to={'/home'}>Home</Link> <br />
            <Link style={{textDecoration:'none'}} to={'/history'}>History</Link>
        </div>

        {/* Guides Section */}
        <div style={{width:'10%'}} className='guides'>
            <h5>Guides</h5> <br />
            <Link style={{textDecoration:'none'}} to={'/'}>React</Link> <br />
            <Link style={{textDecoration:'none'}} to={'/home'}>React Bootstrap</Link> <br />
            <Link style={{textDecoration:'none'}} to={'/history'}>React Router</Link>
        </div>

        {/* Contact Section */}
        <div style={{width:'25%'}}>
            <h5>Contact Us</h5> <br/>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Enter email"
                    />
                    </Col>
                    <Col xs="auto">
                    <Button type="submit" className="mb-2 w-100 btn get">
                        <i className="fa-solid fa-arrow-right contact-btn"></i>
                    </Button>
                    </Col>
                </Row> 
            </Form>

            {/* Social Media Section */}
            <div className='d-flex justify-content-between mt-3' style={{width:'86%'}}>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-facebook fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-twitter fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-brands fa-instagram fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.linkedin.com/in/asish-krishna-p/'}><i className="fa-brands fa-linkedin fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://github.com/Asishpk1'}><i className="fa-brands fa-github fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
                <Link to={'https://www.instagram.com/human_being___/'}><i className="fa-solid fa-phone fa-lg brandLogos" style={{color:'rgba(131, 144, 186, 1)'}}></i></Link>
            </div>

      {/* Light/Dark Mode Section */}
      <div className="btn-group mt-4" role="group" aria-label="Basic radio toggle button group">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        checked={selected === 'btnradio1'}
        onChange={(e) => {setSelected('btnradio1',e);{toggleTheme(e)}}}
      />
      <label className="btn btn-outline-primary btn-responsive-sm" htmlFor="btnradio1">
        Light Mode
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        checked={selected === 'btnradio2'}
        onChange={(e) => {setSelected('btnradio2',e);{toggleTheme(e)}}}
      />
      <label className="btn btn-outline-primary btn-responsive-sm" htmlFor="btnradio2">
        Dark Mode
      </label>
    </div>
        </div>
    </div>
    
    <p className='text-center w-100'>Copyright &copy; 2025 <strong>Luminar</strong> | Designed by <strong>Asish</strong></p>
    </div>
    </>
  )
}

export default Footer