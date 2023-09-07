import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from "react-router-dom";

import "./Login.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isuser,SetIsUser] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [ishome,home]=useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in');
      setLogin(true);

    } catch (error) {
      alert('Incorrect Credentials', error);
    }
  };
  var v="vnrvjiet"
  const verify=(e)=>
  {
    if(verificationCode===v)
    {
        home(true);
    }
    
  }

  const handleAdminClick = () => {
    setIsAdmin(true);
    SetIsUser(false);
  };

  const handleUserClick = () => {
    SetIsUser(true);
    setIsAdmin(false);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();

    // Here you would check if the verification code is correct.
    // If it is, you can proceed with the admin functionality.
    // Otherwise, you can show an error message.
  };

  return (
    <div>
        <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Login</button>
       
      </form>
      {!check&&<Link to="/signup">Not a user?</Link>}
      {check && (
        <div className="choose">
          <button className='Selectors' onClick={handleAdminClick}>Admin</button>
          <button className='Selectors' onClick={handleUserClick}>User</button>
        </div>
      )}
      <div className='Link'>{isuser&&<h1>User</h1>&&<Link  className='Selectors user'to="/user" >User Home</Link>}
</div>
        

      {isAdmin && (
        <div>
          {/* Render admin content here */}
          <h2>Enter Verfication Code</h2>
          <form onSubmit={handleVerificationSubmit}>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          {console.log(verificationCode)}
          <button onClick={verify}>verify</button>
    
          
          
        </form>
        {ishome&& <Link className='Selectors' to="/admin" >Admin Home</Link>}

        </div>
      )}

    </div>
  );
}

export default Login;
