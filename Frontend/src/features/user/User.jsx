import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const user = useSelector((state) => state.user.users);
  console.log(user);

  return (
    <div className="px-15 py-10 rounded-xl shadow-xl bg-gray-200 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 flex gap-10 justify-center items-center">
      {user &&
        user.map((user) => (
          <div >
            <h1 className="text-2xl text-amber-400 text-center mb-10">User Details</h1>
            <h2 key={user.id}>
              Name: {user.name.firstname} {user.name.lastname}
            </h2 >
            <h2 >
              E-mail : {user.email}
            </h2>
            <h2>
              Username : {user.username}
            </h2>
            <h2>
              Password : {user.password}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default Counter;
