import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import mainimg from '../assets/radiofm4-fm4.gif'
import mainimg2 from '../assets/social-media-content-composition.png'
import mainimg3 from '../assets/illustration-social-media-concept.png'
import mainimg4 from '../assets/professional-burnout-depression.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Landing() {

  return (
    <>
    <Header/> <br />

    <div className='p-sm-5 p-2 mt-lg-5 mt-3'>

      {/* Welcome Section */}
      <div className='row w-100 ms-md-5 ms-1'>
      <div className='col-lg-6 d-flex justify-content-center flex-column'>
        <h1>Welcome to <span className='' style={{fontWeight:'700'}}>Streamly</span></h1>
        <h4>Streaming Just Got a Glow-Up.</h4>
        <p style={{textAlign:'justify'}}>Streamly is a sleek online video player that lets you instantly watch videos by pasting a link. No downloads, no hassle. Stream content seamlessly and save your favorites to a personal library for easy access anytime. Streamly offers fast, organized, and effortless streaming.</p>
        <Link to={'/home'}>
        <button className='btn get btn-primary py-2 px-sm-5 py-sm-3 getStartedbtn'>Get Started</button>
        </Link>
      </div>
      <div className='col-md-6 text-center'>
        <img className='w-50 diskimg' style={{marginTop:'-70px'}} src={mainimg} alt="" />
      </div>
    </div> <br /> <br />

    {/* Features Section */}
    <div className='p-sm-5 p-2'>
      <h1 className='mt-lg-5 text-center fs-1'><strong>Features</strong></h1> <br />
      <div className='d-flex align-items-center justify-content-around breadcrumb p-5' style={{borderRadius:'40px'}}>

        {/* First card */}
        <Card className='get shadow1 bgchange mb-3 mb-sm-0' style={{ width: '14rem', backgroundColor:'rgba(40, 53, 99, 1)', borderRadius:'20px' }}>
      <Card.Img variant="top" src={mainimg2} />
      <Card.Body style={{marginTop:'-25px'}}>
        <Card.Title className='text-light'>Manage videos</Card.Title>
        <Card.Text>
          Upload, view, and delete videos in just a few clicks. Simple and seamless.
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Second card */}
    <Card className='get shadow1 bgchange mb-3 mb-sm-0' style={{ width: '14rem', backgroundColor:'rgba(40, 53, 99, 1)', borderRadius:'20px'}}>
      <Card.Img variant="top" src={mainimg3} />
      <Card.Body style={{marginTop:'-25px'}}>
        <Card.Title className='text-light'>Categorize videos</Card.Title>
        <Card.Text>
          Organize your library with drag-and-drop categories for quick access.
        </Card.Text>
      </Card.Body>
    </Card>

    {/* Third card */}
    <Card className='get shadow1 bgchange' style={{ width: '14rem', backgroundColor:'rgba(40, 53, 99, 1)', borderRadius:'20px' }}>
      <Card.Img variant="top" src={mainimg4} />
      <Card.Body style={{marginTop:'-25px'}}>
        <Card.Title className='text-light'>History Control</Card.Title>
        <Card.Text>
          Relive your viewing journey. Manage or clear your watch history anytime.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div> <br /> <br /> <br />

    {/* Description Section */}
    <div className='row d-flex justify-content-around align-items-center p-3 p-sm-5 breadcrumb ms-2 ms-sm-0 me-sm-0 me-2' style={{border:'solid', borderRadius:'30px'}}>
      <div className='col-lg-6'>
        <h1>Seamless and Stream-Ready</h1>

        <p className='get breadcrumb'><span className='fs-4' style={{color:'rgba(79, 96, 156, 1)'}}>Play Everything  </span>Whether it’s a movie, a tutorial, a lecture, or a viral clip, Streamly lets you play virtually any video from the web. With support for multiple formats and sources, your content is always just a click away.</p>

        <p className='get breadcrumb'><span  style={{color:'rgba(79, 96, 156, 1)'}} className='fs-4'>Organize Videos  </span>Build your personal collection with ease. Save videos you love, organize them into categories, and access them anytime. Your favorite content is now right at your fingertips, whenever you need it.</p>

        <p className='get breadcrumb'><span  style={{color:'rgba(79, 96, 156, 1)'}} className='fs-4'>Watch History  </span>Never lose track of what you’ve watched. Streamly automatically tracks your viewing history, so you can easily jump back into unfinished videos or rediscover something you enjoyed earlier.</p>
      </div>

      {/* Youtube Video */}
      <div className='col-lg-5'>
        <iframe className='w-100 get breadcrumb' style={{borderRadius:'25px'}} width="560" height="335" src="https://www.youtube.com/embed/yG0RIU3y8QE?si=bvJW8_IoGQess1e9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </div> <br />
    <Footer/>
    </>
  )
}

export default Landing