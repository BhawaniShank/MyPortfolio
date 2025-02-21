import React from 'react'
import {Navbar,Footer,Home} from './components/'
import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between '>
      <ToastContainer />
      <Navbar />
      <Home/>
    </div>
  )
}

export default App
