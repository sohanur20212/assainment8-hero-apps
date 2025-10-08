import React, { useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Apps from './Apps'
import useApps from '../Hooks/useApps'
import AppCard from './AppCard'
import { Link } from 'react-router'


const Home = () => {
  const {apps} = useApps()
  const featureApps = apps.slice(0,8)
  
  return (
    <div>
      <Banner></Banner>
      <div className='my-10'>
      
              <div className='text-center space-y-5'>
        <h1 className='text-4xl font-bold'>Trending Apps</h1>
      <p className='text-[#777]'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 
     lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5 '>
        {
          featureApps.map(product =><AppCard key={product.id} product = {product}>

          </AppCard>)
          
        }
        <div>
          
        </div>
      </div>
        <div className='flex justify-center'>
          <Link to='/apps' className='bg-gradient-to-r to-[#9F62F2] from-[#632EE3] px-4 py-1 rounded-md text-white'>Show All</Link>
        </div>
        
    </div>
    </div>
  )
}

export default Home