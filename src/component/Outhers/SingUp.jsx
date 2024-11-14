import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";

const SingUp = () => {
  const { createUser } = useContext(MyContext);

  const singUpHandel = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };
  return (
    <div className=" bg-base-200 min-h-screen mt-5">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SingUp now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={singUpHandel}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                SingUp
              </button>
            </div>
            <NavLink to={"/"}>
              <div className=" underline underline-offset-8">
                Already haven account plese
                <span className=" underline"> Login</span>
              </div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
