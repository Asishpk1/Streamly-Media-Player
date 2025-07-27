import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import VideoCard from './VideoCard'
import { addVideoAPI, getAllVideoAPI, updateCategoryAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

function View({addVideoResponse,addCategoryResponse,setdropViewResponse}) {

  // To store video details got from API call
  const [allVideos,setAllVideos]=useState([])
  // console.log(allVideos);

  // To Update videocard list on deletion
  const [deleteVideoResponse,setdeleteVideoResponse] = useState({})
  
  // To call getAllVideos() when page [View Componenet] is rendered.
  useEffect(() => {
    getAllVideos()
  }, [addVideoResponse,deleteVideoResponse,addCategoryResponse])
  
  // To get video details from json server and storing it to state.
  const getAllVideos=async()=>{
    try{
      const result = await getAllVideoAPI()
      // console.log(result);
      if(result.status>=200 && result.status<=300){
        setAllVideos(result.data)
      }
      
    }
    catch(err){
      console.log(err);
      
    }
  }

  const catVideoDropped=async(e)=>{
    const {categoryDetails,videoDetails}= JSON.parse(e.dataTransfer.getData('data'))
    // console.log(categoryDetails,videoDetails);
    categoryDetails.videos=categoryDetails.videos.filter(v=>v.id!=videoDetails.id)
    try{
      const result = await updateCategoryAPI(categoryDetails.id,categoryDetails)
      setdropViewResponse(result)

      if(result.status>=200 && result.status<=300){
        const result = await addVideoAPI(videoDetails)
        if(result.status>=200 && result.status<=300){
          getAllVideos()
          toast.info(`${videoDetails.caption} removed from ${categoryDetails.name}`)
        }

      }
    }
    catch(err){
      console.log(err);
      
    }
    
  }

  return (
    <>
    <div onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>catVideoDropped(e)} className='px-3 px-sm-0'>

      {/* All Videos Section */}
      <h2 className='breadcrumb fs-4 w-50 allvds incwidth' style={{borderRadius:'30px'}}>&nbsp;&nbsp;ALL VIDEOS</h2>

      <Row className='p-3 text-center breadcrumb homesec'>

        {allVideos.length>0?
        allVideos.map((Video)=>
        <Col key={Video.id} className='mt-4 d-flex justify-content-center align-items-center' lg={4} md={6} sm={12}>
        <VideoCard displayvideoData={Video} setdeleteVideoResponse={setdeleteVideoResponse}/>
        </Col> )
        : <div>
          <small className="text-body-secondary" style={{fontSize:'25px'}}>No Video added yet <i className="fa-regular fa-face-frown-open"></i></small>
        </div>
        }
        
      </Row>
    </div>
    </>
  )
}

export default View