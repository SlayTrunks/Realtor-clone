import React from 'react'
import {Link, NavLink, useNavigate } from 'react-router-dom'

export default function Header() {
const navigate  = useNavigate()
  return (
    <div className='bg-white border-b'>
      <header className='flex justify-between items-center px-3 py-3 max-w-6xl mx-auto'>
        <div>
        <img onClick={()=> navigate('/')}  src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' />
        </div>
        <div>
            <ul className='flex gap-10 '>
                <li className=' cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] border-b-transparent'><NavLink to='/' end>Home</NavLink></li>
                <li className='cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] border-b-transparent'><NavLink to='/offers'>Offers</NavLink></li>
                <li className='cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[4px] border-b-transparent'><NavLink to='/sign-in'>Sign in</NavLink></li>
            </ul>
        </div>
      </header>
    </div>
  )
}
