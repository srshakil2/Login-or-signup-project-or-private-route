import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";

const Login = () => {
  const { logIn, user } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/cards");
    }
  }, [user]);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    {
      if (user) {
        //
      }
    }
    logIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log("Error khaise", error.message);
      });
  };
  return (
    <div className=" bg-base-200 min-h-screen mt-5">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handelLogin}>
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
                placeholder="password"
                name="password"
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
                Login
              </button>
            </div>
            <Link to={"singup"}>
              <div className="underline underline-offset-8">
                Create New Account SingUp
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
