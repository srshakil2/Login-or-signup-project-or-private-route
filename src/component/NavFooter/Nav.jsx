import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";

const Nav = () => {
  const Home = "Home";
  const { user, setUser, singOutHandel } = useContext(MyContext);
  // const navigate = useNavigate();
  const handelSignOut = () => {
    // setUser(null);
    // navigate("/");
    singOutHandel()
      .then(() => {
        console.log("successfuly logOut");
      })
      .catch((error) => {
        console.log("Error logout", error.massege);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to={"/"}>
                <li>{Home}</li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLink to={"/"}>
            <ul className="menu menu-horizontal px-1">
              <li>{Home}</li>
            </ul>
          </NavLink>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className=" mr-2">{user.email}</span>
              <button className=" btn" onClick={handelSignOut}>
                SignOut
              </button>
            </>
          ) : (
            <a className="btn">Login</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
