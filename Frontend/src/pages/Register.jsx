import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
    const {register, reset, handleSubmit} = useForm()

    const registerHandler = (data) => {
 data.id = nanoid();
 console.log(data);
 
 reset()
    }

  return (
  <div className='mt-5 w-full text-center'>
    <h1 className='text-4xl font-bold tracking-wide text-green-600 mb-10 text-center'>User Login</h1>
    <form onSubmit={handleSubmit(registerHandler)} className='flex flex-col justify-center items-center gap-6 w-1/2  py-10 mx-auto bg-red-100 rounded-xl shadow-xl'>
    <div className='flex gap-6 justify-center items-center'>
    <label className='text-xl '>Email :</label>
<input
{...register("email")}
placeholder='enter email'
type = "email"
className='outline-0 border-b p-2 text-lg'
/>
</div>
    <div className='flex gap-6 justify-center items-center'>
    <label className='text-xl '>Username :</label>
<input
{...register("username")}
placeholder='enter username'
type = "text"
className='outline-0 border-b p-2 text-lg'
/>
</div>
    <div className='flex gap-6 justify-center items-center'>
    <label className='text-xl '>Password :</label>
<input
{...register("password")}
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