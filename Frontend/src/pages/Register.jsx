import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {asyncRegisterUser} from '../features/actions/userAction'

const Register = () => {
    const {register, reset, handleSubmit} = useForm()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerHandler = (data) => {
 data.id = nanoid();
 data.isAdmin = false;
 console.log(data);
  dispatch(asyncRegisterUser(data))
  navigate('/login')
 reset()
    }

  return (
  <div className='mt-5 w-full text-center'>
    <h1 className='text-4xl font-bold tracking-wide text-green-600 mb-10 text-center'>User Registration</h1>
    <form onSubmit={handleSubmit(registerHandler)} className='flex flex-col justify-center items-center gap-6 w-1/2  py-10 mx-auto bg-red-100 rounded-xl shadow-xl'>

    
    {/* add form validation */}



    <div className='flex gap-6 justify-center items-center'>
    <label className='text-xl '>Email :</label>
<input
{...register("email", {required : true})}
placeholder='enter email'
type = "email"
className='outline-0 border-b p-2 text-lg'
/>
</div>
    <div className='flex gap-6 justify-center items-center'>
    <label className='text-xl '>Username :</label>
<input
{...register("username", {required : true})}
placeholder='enter username'
type = "text"
className='outline-0 border-b p-2 text-lg'
/>
</div>
    <div className='flex gap-6 justify-center items-center'>
    <label className='text-xl '>Password :</label>
<input
{...register("password", {required : true})}
placeholder='enter password'
type = "password"
className='outline-0 border-b p-2 text-lg'
/>
</div>
<div className=' w-full flex justify-center items-center mt-3'>
    <button className='px-10 py-2 bg-blue-500 text-white text-xl rounded-2xl hover:bg-blue-600 hover:scale-105 transition  duration-150 ease-in-out'>Register</button>
</div>
    </form>
    <p className='mt-3'>Already have an account? <Link to={'/login'} className='text-blue-400'>Login</Link></p>
    </div>
  )
}

export default Register