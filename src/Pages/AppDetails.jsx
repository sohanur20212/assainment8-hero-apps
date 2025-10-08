import React from 'react'
import { useParams } from 'react-router'
import useApps from '../Hooks/useApps'
import downloads from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
const AppDetails = () => {
    const {id} = useParams()
    const {apps,loading} = useApps()
    if(loading) return <p>Loading...</p> 

    const app = apps.find(a=>String(a.id)===id)

    if(!app){
        <div className="text-center mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-red-500">App not found 😢</h2>
        <Link to="/" className="text-blue-600 underline">Go Back</Link>
      </div>
    }



  return (
    <div className='flex gap-10'>
        
        {/* left side  */}
        <div>
            <img src={app.image}/>
        </div>
        {/* right side  */}
        <div>
            <div>
                <h1 className='text-xl font-bold'>{app.title}: {app.description}</h1>
                <p className='text-[20px] mb-3'><span className='text-[#777]'>Developed by </span><span className='text-[#9F62F2]'>{app.companyName}</span></p>
                <div className='border border-gray-400'>

                </div>
            </div>
            <div className='flex gap-20'>
                <div className='my-5'>
                    <img className='w-[40px] h-[40px]' src={downloads} />
                    <p>Downloads</p>
                    <h1 className='text-2xl font-bold '>{app.downloads}</h1>
                </div>
                <div className='my-5'>
                    <img className='w-[40px] h-[40px]' src={ratings} />
                    <p>Downloads</p>
                    <h1 className='text-2xl font-bold '>{app.ratingAvg}</h1>
                </div>
                <div className='my-5'>
                    <img className='w-[40px] h-[40px]' src={review} />
                    <p>Downloads</p>
                    <h1 className='text-2xl font-bold '>{app.reviews}</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AppDetails