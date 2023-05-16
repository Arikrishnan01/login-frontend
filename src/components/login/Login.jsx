import React, { useState } from 'react';
import './login.css';
import { URL } from '../../global';
import { useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
        <div>
            {
                register ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div className='login'>
                            <h1 className="formTitle">REGISTER</h1>
                        <form  className='formContainer'>
                            <label className='labelTitle first'>Username</label>
                            <input 
                                className='inputBox' 
                                type="text" 
                                value={username}
                                onChange={ event => setUsername(event.target.value)}
                            />
                            <label className='labelTitle'>Password</label>
                            <input 
                                className='inputBox' 
                                type="password" 
                                value={password}
                                onChange={ event => setPassword(event.target.value)}
                            />
                            <button className="loginButton">Login</button>
                            <button className="forgetButton">Forget Password</button>
                            <button className="registerButton"
                                onClick={() => {
                                    const signup = {
                                        username,
                                        password 
                                    }
                                    fetch(`${URL}/users/signup`, {
                                        method: "POST",
                                        body: JSON.stringify(signup),
                                        headers: {
                                            "Content-Type": "application/json",
                                        }
                                    })
                                        .then((data) => data.json())
                                        .then(() => navigate("/regiter"));
                                    
                                }}
                            >
                                <span className="account">Don't have account?</span>
                                Register</button>

                        </form>
                        </div>
                    </>
                ) 
            }

                        {/* <p
                        onClick={() => setRegister(!register)}
                        style={{
                            marginTop:"10px",
                            textAlign:"center",
                            color:"#0095ff",
                            textDecoration:"underline",
                            cursor:"pointer",
                        }}
                        >{register ? "Login" : "Register"}?
                        </p> */}
        </div>
  )
}
