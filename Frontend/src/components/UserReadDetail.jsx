import React from 'react'
import { useSelector } from 'react-redux';

const UserReadDetail = () => {
    const user = useSelector((state) => state.users?.currentUser || false);




  return (
    <div className="max-w-[50vw]   mx-auto mt-5 p-3 bg-white shadow-lg rounded-lg flex flex-col gap-8">
      
 <div className="w-full  overflow-hidden rounded-md">
 <img
    src={user.profileUrl}
    alt={user.title}
    className="w-40 h-40 rounded-full object-cover"
  />
  </div>

      <div>
        <h2 className="text-2xl font-md mb-4"><span className='text-2xl font-md'>Username :</span> {user.username}</h2>
        <p className="text-md text-gray-500 mb-2 capitalize"><span className='text-xl text-black font-md'>Email :</span> {user.email}</p>
        <p className="text-lg text-gray-700 mb-4"><span className='text-xl text-black font-md'>Password :</span> {user.password}</p>
      </div>
    </div>
  );
}

export default UserReadDetail