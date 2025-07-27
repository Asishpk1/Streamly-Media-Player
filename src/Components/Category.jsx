import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Service/allAPI';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Category({setaddCategoryResponse,dropViewResponse}) {

  const [show, setShow] = useState(false);
  const [allCategory, setallCategory] = useState([])
  // console.log(allCategory);


  // To store Category name entered by user in Category Modal
  const [CategoryName, setCategoryName] = useState("")
  // console.log(CategoryName);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // To Store User entered category name and videos to json file [BackEnd]
  const addCategory = async () => {
    if (CategoryName) {
      try {
        const result = await addCategoryAPI({ name: CategoryName, videos: [] })
        // console.log(result);
        if (result.status >= 200 && result.status <= 300) {
          toast.success(` ${result.data.name} category added to your Playlist`)
          handleClose()
          getAllCategory()
        }
      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.error("Enter a Category name")
    }
  }

  // To call getAllCategory() when page [Category Componenet] is rendered and when respective data changes.
  useEffect(() => {
    getAllCategory()
  }, [dropViewResponse])

  // To get category details from json server and storing it to state.
  const getAllCategory = async () => {
    try {
      const result = await getCategoryAPI()
      // console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        setallCategory(result.data)
      }

    }
    catch (err) {
      console.log(err);

    }
  }

  // To Delete a Category
  const deleteCategory = async (category) => {
    try {
      const result = await deleteCategoryAPI(category.id)
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        toast.info(`${category.name} category deleted from your Playlist`)
        getAllCategory()
      }
    }
    catch (err) {
      console.log(err);

    }
  }

  // To drop videos from All videos to Category.
  const videoDroped = async (e, category) => {
    // console.log(category);

    const videoDetails = JSON.parse(e.dataTransfer.getData('video'))

    // To avoid dropping same videos on a category.
    for (let eachVideo of category.videos){
      if(eachVideo.id==videoDetails.id){
        toast.error(`${videoDetails.caption} already exists in ${category.name}`)
        return
      }
    }
    category.videos.push(videoDetails)

    try {
      const result = await updateCategoryAPI(category?.id, category)
      if (result.status >= 200 && result.status <= 300) {
        toast.info(`${videoDetails.caption} added to ${category.name}`)
        getAllCategory()
        const result = await deleteVideoAPI(videoDetails?.id)
        // console.log(result);
        setaddCategoryResponse(result)
        
      }

    }
    catch (err) {
      console.log(err);

    }
  }

  // To drop Videos from Category to All Videos.
  const catdragStarted=async(e,categoryDetails,videoDetails)=>{
    // console.log(categoryDetails,videoDetails);

    e.dataTransfer.setData("data",JSON.stringify({categoryDetails,videoDetails}))
    
  }

  return (
    <>
      <div className='p-2 p-sm-0'>

        {/* All Categories Section */}
        <div className='d-flex align-items-center justify-content-between' >
          <h2 className='fs-4 w-50 p-3 breadcrumb incwidth ' style={{ borderRadius: '30px' }}>ALL CATEGORIES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <button onClick={handleShow} className='btn get' style={{ marginTop: '-6px' }}><i className="fa-solid fa-circle-plus fa-xl"></i></button>

          {/* New Category Modal Section */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Category details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FloatingLabel
                controlId="floatingInput"
                label="Category name"
                className="mb-3"
              >
                <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category name" />
              </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={addCategory} variant="primary">Add</Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Category */}
        {allCategory.map(category => (
          <div key={category.name} onDragOver={(e) => e.preventDefault()} onDrop={(e) => videoDroped(e, category)} className='shadow rounded py-2 mb-3 homesec'>
            <div className='d-flex align-items-center justify-content-between'>
              <h3 className='ms-3 shadow p-2 rounded mt-1' style={{border:'solid rgba(40, 53, 99, 0.3)'}}>{category.name}</h3>
              <button onClick={() => deleteCategory(category)} className='get me-3' style={{ color: 'rgba(40, 53, 99, 1)', border: 'none', backgroundColor: 'transparent' }}><i className="fa-solid fa-trash"></i></button>
            </div> <br />
            <Row>
              {
                category.videos?.length > 0 &&
                category.videos.map(video => (
                  <Col className='d-flex align-items-center justify-content-around mb-4' draggable={true} onDragStart={(e)=>catdragStarted(e,category,video)} key={video.caption} lg={4} md={6} sm={12}>
                    < VideoCard displayvideoData={video} insideCategory={true} />
                  </Col>
                ))
              }
            </Row>
          </div>
        ))}
      </div>
    </>
  )
}

export default Category