import React from 'react'
import { NavLink } from 'react-router-dom'  
import MainRoutes from '../routes/MainRoutes'
const Nav = () => {
  return (
    <div className=' flex justify-center items-center mx-5 my-2'>
    <nav className='flex text-lg  gap-8 justify-center items-center w-1/2  bg-gray-200 rounder-2xl  '>
        <NavLink to={'/'} className={({isActive}) => isActive ?"text-blue-500 font-bold decoration underline" : "text-black"}>Home</NavLink>
        <NavLink to={'/products'} className={({isActive}) => isActive ?"text-blue-500 font-bold decoration underline" : "text-black"}>Products</NavLink>
        <NavLink to={'/Login'} className={({isActive}) => isActive ?"text-blue-500 font-bold decoration underline" : "text-black"}>Login</NavLink>
        <NavLink to={'/Register'} className={({isActive}) => isActive ?"text-blue-500 font-bold decoration underline" : "text-black"}>Register</NavLink>
    </nav>
    </div>
  )
}

export default Nav