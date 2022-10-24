import React, { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function SignIn() {
  const [showPassword,setShowPassword] = useState(false)
  // const [eye,setEye] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleToggleEye = () => {
    setShowPassword(prev=>!prev)
    // setEye(prev=>!prev)
  }

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  // console.log(formData);
  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Sign in</h1>
      <div className="flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img className="w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Picture"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className=" mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
            />
            <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
            />
            {showPassword ? <AiFillEyeInvisible onClick={handleToggleEye} className='absolute right-3 top-3 text-xl cursor-pointer'  /> : <AiFillEye onClick={handleToggleEye} className='absolute right-3 top-3 text-xl cursor-pointer' />} 
            </div>
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg' >
              <p className="mb-6">Dont have an account?  
                <Link to='/sign-up' className="text-red-600 hover:text-red-700 transition  duration-200 ease-in-out">  Register</Link>
              </p>
              <p>
                <Link to='/forgot-password' className="text-blue-600 hover:text-blue-700 transition  duration-200 ease-in-out">Forgot password?</Link>
              </p>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium hover:bg-blue-700 uppercase rounded shadow-md transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 ">Sign In</button>
          <div className="my-4">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <Button/>
          </form>
         
        </div>
      </div>
    </section>
  );
}
