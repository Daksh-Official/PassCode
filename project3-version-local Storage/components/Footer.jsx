import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 py-1 min-h-12 flex items-center justify-center font-bold text-lg text-white'>
        
        <div className='flex gap-2'><div className="logo">
            <span>@Pass<span className=' text-orange-400'>Code@</span></span>
        </div> Made with <img src="./public/icons/heart.png" className="w-8" alt="" /> by Daksh</div>
    </div>
  )
}

export default Footer
