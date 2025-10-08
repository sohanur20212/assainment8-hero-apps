import React from 'react'
import downloads from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
const AppCard = ({product}) => {
    
  return (
    <div>
        <div className="card bg-base-100 shadow-sm p-3 h-full border-1 border-gray-100">
  <figure>
    <img className='w-full h-[200px] object-cover rounded-md'
      src={product.image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title} </h2>
  </div>
  <div className='flex justify-between '>
    <div className='flex px-3 py-2 rounded-md items-center gap-2 bg-[#F1F5E8] '>
    <img className='h-[16px] w-[16px]' src={downloads} alt="" /><span>{product.downloads  }</span>
  </div>
    <div className='flex px-3 py-2 rounded-md items-center gap-2 bg-[#F1F5E8] '>
    <img className='h-[16px] w-[16px]' src={rating} alt="" /><span>{product.ratingAvg  }</span>
  </div>
  </div>
</div>

    </div>
    
  )
}

export default AppCard