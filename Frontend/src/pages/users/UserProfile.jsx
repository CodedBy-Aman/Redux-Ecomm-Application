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
  <div className="w-screen p-4 flex gap-5">
    <UserReadDetail />

  {/* Vertical Divider */}
  <div className="w-px bg-gray-400" />

    <UserUpdateDetail />
</div>
  );
};

export default UserProfile;
