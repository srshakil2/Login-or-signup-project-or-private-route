import React, { useContext } from "react";
import { MyContext } from "../utils/ContextProvider";
import { Navigate } from "react-router-dom";

const Prievate = ({ children }) => {
  const { user } = useContext(MyContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default Prievate;
