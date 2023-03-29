import './Login.css';
import React, { userState } from 'react';
import SubmitBtn from './SubmitBtn';
// ('/Auth') rooting
// firebase 

export default function Login(props) {

  return (
    <div className='login-from'>
          <div className='login-form-top'>
           <h1>Login</h1>
          </div>
          <div className='login-from-inputs'>
            <p>Email</p>
             <input type="email" name="user_email" placeholder='Enter your Email' />
            <p>Password</p>
            <input type="password" name="user_password" placeholder='Enter password' />
         </div>
        <p id="sign-up">Not a member? Sign up here!</p>
      <SubmitBtn/>
    </div>
  )
}