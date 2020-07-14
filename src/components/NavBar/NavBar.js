import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  // localStorage.removeItem(`credentials`)
  const handleLogout = () => {
    props.clearUser();
    ;
  }
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink className="nav-link" exact to="/" disabled activeStyle={{

              color: "lime"
            }}>
              Home
            </NavLink>
          </li>
          {props.hasUser
            ? <li>
          
            <NavLink className="nav-link" to="/animals" disabled activeStyle={{
              
              color: "lime"
            }}>
              Animals
            </NavLink>
          </li>
          : null}
          <li>
              <NavLink className="nav-link" to="/Location" disabled activeStyle={{
              
              color: "lime"
            }}>
                  Locations
              </NavLink></li>
          {props.hasUser
            ? <li>
              <NavLink className="nav-link" to="/Employee" disabled activeStyle={{
              
              color: "lime"
            }}>
                  Employee
              </NavLink></li>
              : null}
              {props.hasUser
                ? <li>
              <NavLink className="nav-link" to="/Owner" disabled activeStyle={{
              
              color: "lime"
            }}>
                  Owner
              </NavLink></li>
              : null}
              {props.hasUser
                ? 
                <li>
                <NavLink className="nav-link" exact to= "/" onClick={handleLogout}> Logout </NavLink>
              </li>
              : <li>
                <NavLink className="nav-link" to="/Login" disabled activeStyle={{
              
              color: "lime"
            }}>
                  Login
              </NavLink></li>}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;