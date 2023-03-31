import React, {useState} from "react";
import SubmitBtn from "./SubmitBtn";
import axios from "axios";
import "./Login.css";

export default function Login() {
  // login Success or error
  const [isloginUnsuccess, setLoginUnsuccess] = useState();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // inputs user email and password
    const userLoginInfo = {
      email: event.target[0].value,
      password: event.target[1].value
     }

     // (async) to send email and password to express endpoint /login
    const loginResult  = await tryLogin(userLoginInfo);

    // when user login is unsuccessful
    if (loginResult === false) {
      setLoginUnsuccess(true);
    // user login is successful
    } else if (loginResult === true) { 
      setLoginUnsuccess(false);
    }
  };

  const tryLogin = async (userLoginInfo) => {
    const isEnableToLogin = await axios.post("/login", userLoginInfo);
    return isEnableToLogin.data;
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
             <input type="email" name="email" defaultValue="" placeholder="email" required/>
          </label>
          </div>  
          <div className="inputs">
            <p>Password</p>
            <label>
              <input type="password" name="lastName" defaultValue="" placeholder="password" required/>
            </label>
          </div>
          <p id="sign-up">Not a member? Sign up here!</p>

          {isloginUnsuccess
            ? <p id="err">Sorry Incorrect password or email address</p>
            : <></>
          }
         <SubmitBtn/>
    </form>
    </div>
   </div>
  );
}

