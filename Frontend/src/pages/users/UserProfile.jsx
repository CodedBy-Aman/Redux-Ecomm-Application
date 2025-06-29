import React from "react";
import UserReadDetail from "../../components/UserReadDetail";
import UserUpdateDetail from "../../components/UserUpdateDetail";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.users?.currentUser || false);

  if (!user) {
    return (
      <p className="text-3xl mt-[15%] text-center text-gray-500">
        user not found.
      </p>
    );
  }
  return (
    <div className="w-screen p-4 flex justify-between gap-5">
      <UserReadDetail />
      <UserUpdateDetail />
    </div>
  );
};

export default UserProfile;
