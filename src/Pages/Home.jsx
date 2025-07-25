import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {

  // State Lifting
  const [addVideoResponse,setaddVideoResponse]=useState({})
  const [addCategoryResponse,setaddCategoryResponse]= useState({})
  const [dropViewResponse,setdropViewResponse] = useState({})

  return (
    <>
    <Header/> <br />
    <div className='p-5'>
      <div className='d-flex justify-content-between'>
        <Add setaddVideoResponse={setaddVideoResponse} />
        <Link to={'/history'}>
        <button className='btn get'>Watch History</button>
        </Link>
      </div> <br />

      <div className='row mt-4'>
        <div className='col-lg-6'>
          <View addVideoResponse={addVideoResponse} addCategoryResponse={addCategoryResponse} setdropViewResponse={setdropViewResponse} />
        </div>

        <div className='col-lg-6 mt-5 mt-md-0'>
          <Category setaddCategoryResponse={setaddCategoryResponse} dropViewResponse={dropViewResponse} />
        </div>
      </div>
    </div> <br /> <br />
    <Footer/>
    </>
  )
}

export default Home