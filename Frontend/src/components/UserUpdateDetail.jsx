import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteUser,
  asyncLogoutUser,
  asyncUpdateUser,
} from "../features/actions/userAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserUpdateDetail = () => {
  const user = useSelector((state) => state.users?.currentUser || false);

  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // Reset form when user is loaded/changed
  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
        password: user.password,
      });
    }
  }, [user, reset]);

  const updateUserHandler = async (data) => {
    const { id, isAdmin, ...userDataToCompare } = user;

    const hasChanged = Object.keys(data).some(
      (key) => data[key]?.trim() !== userDataToCompare[key]?.trim()
    );

    if (hasChanged) {
      await dispatch(asyncUpdateUser({ ...data, id }));
      toast.success("Profile updated!");
    } else {
      toast.error("No change detected");
    }
  };

  const logOutHandler = async () => {
    await dispatch(asyncLogoutUser());
    navigate("/login");
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      const deleted = await dispatch(asyncDeleteUser(id));
      if (deleted) Navigate("/login");
    }
  };

  return (
    <form className="w-[50vw] mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Update Product</h2>

      {/* Image URL */}
      <div>
        <label
          htmlFor="profileUrl"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Profile URL
        </label>
        <input
          {...register("profileUrl", { required: true })}
          type="url"
          name="profileUrl"
          placeholder="https://example.com/image.jpg"
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>
      {/* username */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Username
        </label>
        <input
          {...register("username", { required: true })}
          type="text"
          name="username"
          placeholder="enter username"
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          E-mail
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>

      {/* password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          password
        </label>
        <input
          {...register("password", { required: true })}
          name="password"
          placeholder="enter password"
          className="w-full border border-gray-300 p-2 rounded-lg resize-none"
          rows="4"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-between gap-4">
        {/* Update Button */}
        <button
          disabled={isSubmitting}
          onClick={handleSubmit(updateUserHandler)}
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Update
        </button>
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => logOutHandler()}
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          Logout
        </button>

        {/* Delete Button */}
        <button
          type="button"
          onClick={() => handleDelete(user.id)}
          className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default UserUpdateDetail;
