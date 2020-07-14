import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import ApplicationViews from "./ApplicationViews";
import {Route} from "react-router-dom"
import "./kennel.css";

const Kennel = props => {
  const isAuthenticated = () => {
    if(sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null){
      return true
    }else{
      return false
    }};

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  
  
 
  

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} {...props} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;