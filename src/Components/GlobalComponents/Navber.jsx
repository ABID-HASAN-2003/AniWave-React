import React from 'react'
import img from '../../assets/logo/AniWave.png'
const Navber = () => {
  return (
    <div className='bg-white border-b-2 border-rose-700'>
        <div className="flex container mx-auto items-center">
          <div className="flex items-center flex-1 gap-2 md:gap-5 py-2">
            <img
                className='h-15 w-15 rounded-full'
                alt="Tailwind CSS Navbar component"
                src={img}/>
            <a className="btn btn-ghost text-xl">AniWave</a>
          </div>
          <div>
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-50 lg:w-100 bg-white outline-none border-amber-300" />
          </div>
        </div>
    </div>
  )
}

export default Navber
