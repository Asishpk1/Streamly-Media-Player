import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import poster1 from '../assets/stranger.jpg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI, saveHistoryAPI } from '../Service/allAPI';
import { toast } from 'react-toastify';



function VideoCard({ displayvideoData, setdeleteVideoResponse, insideCategory }) {
  // console.log(displayvideoData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // To open Modal
  const handleShow = async () => {
    setShow(true);
    const { caption, youtubeUrl } = displayvideoData
    const localTime = new Date()
    const formatedDate = localTime.toLocaleString()
    // console.log(formatedDate);
    const historyDetails = { caption, youtubeUrl, formatedDate }
    // console.log(historyDetails);

    try {
      // To Store History details to json file [BackEnd]
      const result = await saveHistoryAPI(historyDetails)
      // console.log(result);

    }
    catch (err) {
      console.log(err);

    }


  }

  // To Delete a Video card
  const deleteVideo = async (videoDetails) => {
    try {
      const result = await deleteVideoAPI(videoDetails?.id)
      // console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        toast.info(`${videoDetails.caption} removed from Playlist`)
        setdeleteVideoResponse(result)

      }
    }
    catch (err) {
      console.log(err);

    }
  }

  // To drop videos to Cateory section.
  const dragStarted = (e, videoDetails) => {
    // console.log(videoDetails);
    // console.log(e);

    e.dataTransfer.setData("video", JSON.stringify(videoDetails))

  }

  return (
    <>
      <div draggable={true} onDragStart={(e) => dragStarted(e, displayvideoData)}>

        {/* Video Card */}
        <Card className='bg-light video-card' style={{ width: '12rem', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px', height: '19rem', overflow: 'hidden' }}>
          <Card.Img className='video-card-img' onClick={handleShow} variant="top" src={displayvideoData?.imageUrl} style={{ height: '80%', borderRadius: '7px 7px 0px 0px' }} />
          <div className="overlay">
            <i className="fa-solid fa-circle-play"></i>
          </div>
          <Card.Body className='d-flex justify-content-between align-items-center' style={{ marginTop: '-10px' }}>
            <Card.Title style={{ marginLeft: '-10px' }}>{displayvideoData?.caption}</Card.Title>
            {!insideCategory &&
              <button onClick={() => deleteVideo(displayvideoData)} className='get' style={{ color: 'rgba(40, 53, 99, 1)', border: 'none', backgroundColor: 'transparent', marginRight: '-10px', marginTop: '-5px' }}><i className="fa-solid fa-trash"></i></button>
            }
          </Card.Body>
        </Card>

        {/* Youtube video playing Modal Section */}
        <Modal className='w-100'
          show={show}
          onHide={handleClose}
          size="lg"
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{displayvideoData?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe style={{ borderRadius: '10px' }} width="100%" height="420" src={`${displayvideoData?.youtubeUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default VideoCard