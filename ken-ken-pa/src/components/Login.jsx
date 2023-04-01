import React from "react";
import SubmitBtn from "./SubmitBtn";
import UIText from "../data/locales.json";
import "./Login.css";

export default function Login(props) {
  const {currentLocale} = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value); // email
    console.log(event.target[1].value); // password
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
             <input type="email" name="email" defaultValue="" placeholder="email"/>
          </label>
          </div>  
          <div className="inputs">
            <p>{UIText.password[currentLocale]}</p>
            <label>
              <input type="password" name="lastName" defaultValue="" placeholder="password"/>
            </label>
          </div>
          <p id="sign-up">{UIText["signup-prompt"][currentLocale]}</p>
         <SubmitBtn type="login" currentLocale={currentLocale}/>
    </form>
    </div>
   </div>
  );
}

