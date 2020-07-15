import React, { useState } from "react"
import Kennel from "../kennel"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
 

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRemember = (evt) => {
      setRememberMe(true)
  }
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(rememberMe)
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
   if(rememberMe == true) {
    localStorage.setItem(
        "credentials",
        JSON.stringify(credentials),
        
        
     );props.setUser(true)
    }else {
        props.setUser(credentials)
      
    };
    console.log("local", localStorage.credentials)
    console.log("session", sessionStorage.credentials)
    props.history.push("/");
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
          <input onClick={handleRemember} type="checkbox" id="rememberMe"></input>
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Sign in</button>
        
      </fieldset>
    </form>
  );
};

export default Login;