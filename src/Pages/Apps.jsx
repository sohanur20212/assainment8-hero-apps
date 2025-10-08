import React from 'react'
import useApps from '../Hooks/useApps'
import AppCard from './AppCard'
import { Link } from 'react-router'

const Apps = () => {
  const {apps} = useApps()
  const featureApps = apps.slice(0,8)
  console.log(apps)
  return (
    <div className='my-10'>
      <div className='text-center space-y-5'>
        <h1 className='text-4xl font-bold'>Trending Apps</h1>
      <p className='text-[#777]'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex justify-between items-center mt-5 '>
        <div className=' '>
          <h1><span>(20) Apps Found</span></h1>
        </div>
        <div>
          <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label></div>
      </div>
      <div className='grid grid-cols-4 gap-5 my-5'>
        {
          featureApps.map(product =><AppCard key={product.id} product = {product}>

          </AppCard>)
          
        }
        <div>
          
        </div>
      </div>
        <div className='flex justify-center'>
          <Link className='bg-gradient-to-r to-[#9F62F2] from-[#632EE3] px-4 py-1 rounded-md text-white'>Show All</Link>
        </div>
        
    </div>
  )
}

export default Apps