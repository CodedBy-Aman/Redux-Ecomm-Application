import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const isAdmin = useSelector(
    (state) => state.users?.currentUser?.isAdmin || false
  );

  const isLoggedIn = useSelector((state) => state.users?.isLoggedIn);

  return (
    <div className=" flex justify-center items-center mx-5 my-2">
      <nav className="flex text-lg  gap-10 justify-center items-center w-1/2 py-3  bg-gray-200 rounded-xl ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold decoration underline"
              : "text-black"
          }
        >
          Products
        </NavLink>
        {isAdmin && (
          <NavLink
            to={"/admin/create-product"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold decoration underline"
                : "text-black"
            }
          >
            Create-Product
          </NavLink>
        )}
        {isLoggedIn ? (
          <>
            <NavLink
              to={"/user-profile"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold decoration underline"
                  : "text-black"
              }
            >
              Profile
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={"/Login"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold decoration underline"
                  : "text-black"
              }
            >
              Login
            </NavLink>
            <NavLink
              to={"/Register"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold decoration underline"
                  : "text-black"
              }
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Nav;
