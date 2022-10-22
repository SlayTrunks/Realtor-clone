import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-white border-b'>
      <header className='flex justify-between items-center px-3 py-3 max-w-6xl mx-auto'>
        <div>
           <Link to='/'> <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' /></Link>
        </div>
        <div>
            <ul className='flex gap-10 cursor-pointer'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/offers'>Offers</Link></li>
                <li><Link to='/sign-in'>Sign in</Link></li>
            </ul>
        </div>
      </header>
    </div>
  )
}
