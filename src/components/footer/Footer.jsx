import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFillArrowUpCircleFill} from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='flex items-center mt-28 bg-white bg-opacity-5  mb-0 pb-2'>
      <ul className='text-center text-lg font-medium    mx-auto p-0 m-6'>
        <li><NavLink to="/" className=" text-white ">Home</NavLink></li>
        <li><NavLink to="/galerie" className="text-white">Galerie</NavLink></li>
        <li><NavLink to="/contact" className="text-white">Contact</NavLink></li>
        <li><NavLink to="/informations" className="text-white">Informations</NavLink></li>
      </ul>
    <a href="#top" className='pr-12 text-white absolute bottom-30 right-0 '><BsFillArrowUpCircleFill size={40} /></a>
    </div>
  )
}
