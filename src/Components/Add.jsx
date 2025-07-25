import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {toast } from 'react-toastify';
import { addVideoAPI } from '../Service/allAPI';

function Add({setaddVideoResponse}) {

  // To store datas entered by user in "Upload New Video" Modal
  const [videoDetails,setVideoDetails]=useState({caption:'',imageUrl:'',youtubeUrl:''})
  // console.log(videoDetails);
  

  const [show, setShow] = useState(false);

  // To display "Invalid url" when user enter invalid youtube video url.
  const [IsInvalidUrl,setInvalidUrl] = useState(false)

  // To close the Modal and for reseting values in state.
  const handleClose = () =>{
    setShow(false)
    setVideoDetails({caption:'',imageUrl:'',youtubeUrl:''})
    setInvalidUrl(false)
  }
  const handleShow = () => setShow(true);

  // Function for converting normal Youtube url to Embed url and for storing it to state.
  const getEmbedUrl=(url)=>{
    if(url.includes("v=")){
      setInvalidUrl(false)
      let videoId=url.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
    }
    else{
      setVideoDetails({...videoDetails,youtubeUrl:''})
      setInvalidUrl(true)
    }
  }

  // To Store User entered video details to json file [BackEnd]
  const handleUpload=async()=>{
    const {caption,imageUrl,youtubeUrl}=videoDetails
    if(caption && imageUrl && youtubeUrl){
      // API CALL
      try{
        const result = await addVideoAPI(videoDetails)
        // console.log(result);

        if(result.status>=200 && result.status<=300){
          toast.info(` ${result.data.caption} added to your Playlist`)

          // To close Modal when Video successfully added.
          handleClose()
          
          setaddVideoResponse(result)
        }
      }
      catch(err){
        console.log(err);
        
      }
      
    }
    else{
      toast.error("Enter all the fields")
    }
  }

  return (
    <>
    <div>
      <button onClick={handleShow} className='btn btn-primary get'>Upload New Video &nbsp;<i className="fa-solid fa-circle-plus fa-lg"></i></button>

      {/* Upload Video Modal Section */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please fill the following fields
          <div className='mt-3 p-2'>
            <FloatingLabel
                controlId="floatingInput"
                label="Video caption"
                className="mb-3"
              >
                <Form.Control onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video caption" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Image url" className="mb-3">
                <Form.Control onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Image url" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Youtube url">
                <Form.Control onChange={(e)=>getEmbedUrl(e.target.value)} type="text" placeholder="Youtube url" />
                </FloatingLabel>
                {IsInvalidUrl && <div className='mt-2 text-danger'>Invalid Youtube Url</div>}
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default Add