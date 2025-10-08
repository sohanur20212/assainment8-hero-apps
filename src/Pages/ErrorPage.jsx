import React from 'react'
import error from '../assets/error-404.png'
import { Link } from 'react-router'
const ErrorPage = () => {
  return (
    <div className='flex flex-col  min-h-screen justify-center items-center space-y-5 '>
        <img src={error} alt="" />
        <h1>Oops, page not found!</h1>
        <p>The page you are looking for is not available.
        
        </p>
        <Link to='/' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-1 rounded-md text-white'>Go Back</Link>

    </div>
  )
}

export default ErrorPage