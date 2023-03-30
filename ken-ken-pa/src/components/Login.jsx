import React from "react";
import SubmitBtn from "./SubmitBtn";
import "./Login.css";

export default function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value); // email
    console.log(event.target[1].value); // password
    // ignore white space? then pop up can tell invaild inputs to user
    
    // (async) to send email and password to express endpoint /login


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

