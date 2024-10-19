import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setInSignInForm]=  useState(true)
  const toggleSignInForm =()=>{
    setInSignInForm(prev=>!prev);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg'
            srcSet='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg 959w'/>
        </div>
        <form className='absolute bg-black text-white flex flex-col w-5/6  md:w-72 my-36 mx-auto left-0 right-0 px-6 rounded-lg bg-opacity-80' >
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm &&
                <input type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-700 '/>
            }
            <input type='text' placeholder='Email Address' className='p-4 my-4 bg-gray-700 '/>
            <input type='password' placeholder='Password' className='p-4 my-4 bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Existing User? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login