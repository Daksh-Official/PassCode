import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-700 py-1 min-h-12 flex items-center justify-around font-bold text-xl text-white'>
        <div className="logo">
            <span>@Pass<span className=' text-orange-400'>Code@</span></span>
        </div>
        <div className="hub ">
            <button className='flex items-center gap-1 border-2 rounded-full border-white px-1 text-lg cursor-pointer hover:bg-black transition-all duration-250 hover:border-black hover:invert-100'>
                <img className="w-8" src="./public/icons/github.svg" alt="" />
                <span>Github</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar
