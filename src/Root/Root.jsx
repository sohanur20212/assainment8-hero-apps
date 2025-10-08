import React from 'react'
import Navber from '../Components/Header/Navber'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer.jsx/Footer'

const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navber></Navber>
        <div className='container mx-auto my-10 flex-1'><Outlet></Outlet></div>
        <Footer></Footer>
    </div>
  )
}

export default Root