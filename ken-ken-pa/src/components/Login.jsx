import React, {useState} from "react";
import SubmitBtn from "./SubmitBtn";
import UIText from "../data/locales.json";
import axios from "axios";
import "./Login.css";

export default function Login(props) {
  const {currentLocale} = props;
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
           <h1>{UIText.login[currentLocale]}</h1>
      </div>
    <div className='login-from-inputs'>
     <form onSubmit={handleSubmit}>
          <p>{UIText.email[currentLocale]}</p>
          <div className="inputs">
            <label>
             <input type="email" name="email" defaultValue="" placeholder="email" required/>
          </label>
          </div>  
          <div className="inputs">
            <p>{UIText.password[currentLocale]}</p>
            <label>
              <input type="password" name="lastName" defaultValue="" placeholder="password" required/>
            </label>
          </div>
          <p id="sign-up">{UIText["signup-prompt"][currentLocale]}</p>

          {isloginUnsuccess
            ? <p id="err">Sorry Incorrect password or email address</p>
            : <></>
          }
         <SubmitBtn type="login" currentLocale={currentLocale}/>
    </form>
    </div>
   </div>
  );
}

