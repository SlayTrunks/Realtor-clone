import React from 'react'
import {FcGoogle}  from 'react-icons/fc'

export default function Button() {
  return (
    <button className='flex items-center justify-center w-full px-7 py-3 uppercase text-sm  font-medium bg-red-700 text-white hover:bg-red-800 transition delay-150 ease-in-out shadow-md active:bg-red-900 hover:shadow-lg rounded'> <FcGoogle className='text-2xl bg-white  rounded-full mr-2'/> Continue with Google</button>
  )
}
