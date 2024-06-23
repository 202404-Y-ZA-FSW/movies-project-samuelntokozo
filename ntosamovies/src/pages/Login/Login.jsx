import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../Firebase';
import spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    loading ? (
      <div className="login-spinner"> 
        <img src={spinner} alt="loading" /> 
      </div>
    ) : (
      <div className='login'>
        <img src={logo} className='login-logo' alt='Logo' />
        <div className="login-form">
          <h1>{signState}</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder='Your name' 
                required 
              />
            )}
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder='Email' 
              required 
            />
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder='Password' 
              required 
            />
            <button type='submit'>{signState}</button>
            <div className="form-help">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>New to Ntosamovies? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;

