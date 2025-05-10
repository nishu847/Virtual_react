import React from 'react'
import logo from "../assets/logo.png"
import {Menu,X} from "lucide-react"
import {navItems} from "../constants"
import { useState } from 'react'
const Navbar = () => {
    const [mobile,setMobile]=useState(false);
    const togglemobile=()=>{
        setMobile(!mobile);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b-neutral-700/80">
        <div className="container px-4 m-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-center">
                    <img className='h-10 w-10 mr-2' src={logo} alt="" />
                    <div className="text-xl tracking-tight">VirtualR</div>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12 '>
                    {navItems.map((item,index)=>(
                        <li key={index} >
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="lg:flex justify-center space-x-12 items-center hidden">
                    <a href="#" className='py-2 px-3 border rounded-md text-white'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={togglemobile}>{mobile ? <X/> : <Menu/>}</button>
                </div>
            </div>
            {mobile && (
                <div className='flex flex-col p-12 fixed right-0 justify-center items-center bg-neutral-900 w-full z-20 lg:hidden'>
                    <ul>
                    {navItems.map((item,index)=>(
                        <li key={index} className='mb-2' >
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className='py-2 px-3 border rounded-md mb-2'>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>Create an account</a>
                    </div>
                </div>
            ) }
        </div>
    </nav>
  )
}

export default Navbar