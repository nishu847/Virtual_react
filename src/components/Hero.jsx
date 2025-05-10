import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-20 mt-6">
        <h1 className='text-4xl sm:6xl lg:text-7xl text-center tracking-wide'>VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>for Developers</span></h1>

        <p className='mt-10 text-neutral-500 max-w-4xl text-center text-lg '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus error quasi nulla hic. Ipsam necessitatibus eligendi perspiciatis possimus a nemo doloremque iusto culpa.</p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-4 mx-3 rounded-md'>Start for Free</a>
            <a href="#" className='py-3 px-4 rounded-md border mx-3'>Documentation</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay muted loop className='rounded-md border border-orange-700 mx-2 my-4 shadow-orange-400 w-1/2'>
            <source src={video1} type='video/mp4'/>Your browser does not support the video tag</video>
            <video autoPlay muted loop className='rounded-md border border-orange-700 mx-2 my-4 shadow-orange-400 w-1/2'>
            <source src={video2} type='video/mp4'/>Your browser does not support the video tag</video>
        </div>
    </div>
  )
}
export default Hero