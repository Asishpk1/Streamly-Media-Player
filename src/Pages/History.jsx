import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Table from 'react-bootstrap/Table';
import '../App.css'
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../Service/allAPI';
import { toast } from 'react-toastify';

function History() {
  
  // To store history details got from API call.
  const [history,setHistory]= useState([])

  // To call getHistory() when page [History Componenet] is rendered.
  useEffect(() => {
    getHistory()
  }, [])
  
  // To get history details from json server and storing it to state.
  const getHistory=async()=>{
    try{
      const result= await getHistoryAPI()
      // console.log(result);
      setHistory(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
  }

  // To delete a history.
  const handleDelete=async(id)=>{
    try{
      const result= await deleteHistoryAPI(id)
      // console.log(result);
      if(result.status>=200 && result.status<=300){
        getHistory()
        toast.info(` Video history deleted successsfully`)
      }
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
    <div>
      <Header/> <br /> <br />

      {/* History Section */}
      <div className='d-flex justify-content-center w-100'>
        <div className='d-flex align-items-center justify-content-between' style={{width:'90%'}}>
        <h1>Watch History</h1>
        <Link to={'/home'}>
        <button className='btn get'>Back to <i className="fa-solid fa-house"></i></button>
        </Link>
      </div>
      </div>

      {/* History Table Section */}
      <div className='p-5 ms-md-5 me-md-5' >
      {history.length>0?
              <Table responsive className='table-hover'>
        <thead>
          <tr className='table-light'>
            <th>Sl.No</th>
            <th>Video</th>
            <th>Link</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item,Index)=>(
            <tr key={item.id}>
            <td>{Index+1}</td>
            <td>{item.caption}</td>
            <td><a className='text-decoration-none' href={item.youtubeUrl}>{item.youtubeUrl}</a></td>
            <td>{item.formatedDate}</td>
            <td><button className='get' onClick={()=>handleDelete(item?.id)} style={{color:'rgba(40, 53, 99, 1)',border:'none', backgroundColor:'transparent'}}>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash"></i></button></td>
          </tr>
          ))}
        </tbody>
      </Table>
      :
      <div className='d-flex justify-content-center align-items-center gap-2' style={{fontSize:'25px'}}>No items found in history <i className="fa-regular fa-face-surprise"></i></div>
       }
      
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default History