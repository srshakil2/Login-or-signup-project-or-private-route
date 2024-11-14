import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./Firebase";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  // courent user state
  const [user, setUser] = useState(null);
  console.log(user);
  // singUp
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // singOut
  const singOutHandel = () => {
    return signOut(auth);
  };
  // ovjarver in auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (courenUser) => {
      setUser(courenUser);
      console.log("coefsdfsdf", courenUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // contextAPI obj
  const data = {
    user,
    setUser,
    createUser,
    logIn,
    singOutHandel,
  };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default ContextProvider;
