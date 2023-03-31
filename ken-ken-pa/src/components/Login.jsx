import React from "react";
import SubmitBtn from "./SubmitBtn";
import axios from "axios";
import "./Login.css";

export default function Login() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    // inputs from form data
    const userLoginInfo = {
      email: event.target[0].value,
      password: event.target[1].value
     }

    // ignore white space? then pop up can tell invaild inputs to user
    if (userLoginInfo.email === "" || userLoginInfo.password === "") {
      // pop up?? or message??
      return; // 
    }
    
    // (async) to send email and password to express endpoint /login
    const isEnableToLogin = await axios.post("/login", userLoginInfo);
    console.log(isEnableToLogin.status);
    // faild or sucess
  };

  return (
    <div className='login-from'>
      <div className='login-form-top'>
           <h1>Login</h1>
      </div>
    <div className='login-from-inputs'>
     <form onSubmit={handleSubmit}>
          <p>Email</p>
          <div className="inputs">
            <label>
             <input type="email" name="email" defaultValue="" placeholder="email"/>
          </label>
          </div>  
          <div className="inputs">
            <p>Password</p>
            <label>
              <input type="password" name="lastName" defaultValue="" placeholder="password"/>
            </label>
          </div>
          <p id="sign-up">Not a member? Sign up here!</p>
         <SubmitBtn/>
    </form>
    </div>
   </div>
  );
}

