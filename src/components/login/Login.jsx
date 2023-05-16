import React from 'react';
import './login.css';

export default function Login() {


  return (
    <div className='login'>
            <h1 className="formTitle">LOGIN</h1>
        <form  className='formContainer'>
            <label className='labelTitle first'>Username</label>
            <input className='inputBox' type="text" />
            <label className='labelTitle'>Password</label>
            <input className='inputBox' type="password" />
            <button className="loginButton">Login</button>
            <button className="forgetButton">Forget Password</button>
            <button className="registerButton">
                <span className="account">Don't have account?</span>
                Register</button>

        </form>
    </div>
  )
}
