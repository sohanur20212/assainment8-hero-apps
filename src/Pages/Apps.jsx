import React, { useState } from 'react'
import useApps from '../Hooks/useApps'
import AppCard from './AppCard'
import { Link } from 'react-router'




const Apps = () => {
  // custom hooks 
  const {apps} = useApps()

  const [search,setSearch] = useState('')
  const term = search.trim().toLowerCase();
  const searchApps = term?apps.filter(app =>app.title.toLowerCase().includes(term)):apps
  // when search not found
  const isNotFound = term && searchApps.length === 0

  return (
    <div className='my-10'>
     <div>
        <div className='text-center space-y-5'>
        <h1 className='text-4xl font-bold'>Our All Applications</h1>
      <p className='text-[#777]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex justify-between items-center mt-5 '>
    
      </div>
    </div>
      <div className='flex justify-between items-center mt-5 mx-3 md:mx-0 '>
        <div className=' md:font-bold text-sm md:text-lg'>
          <h1><span>({searchApps.length}) Apps Found</span></h1>
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
  <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
</label></div>
      </div>
 {/* when no app found  */}
       {isNotFound ? (
        <div className='text-center mt-10 space-y-4'>
          <h2 className='text-2xl font-semibold text-red-500'>No apps found 😢</h2>
          <Link to='/' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-1 rounded-md text-white'>Back to Home</Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5'>
          {searchApps.map(product => (
            <AppCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Apps