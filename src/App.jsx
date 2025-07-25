import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import History from './Pages/History'
import {Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      closeOnClick={false}
      theme="colored"
      />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </>
  )
}

export default App
