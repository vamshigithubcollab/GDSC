import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, confirmPassword] = useState('');
  const[log,setlogin]=useState(false);

  const handleSignup = async (e) => {
    if(password!==cpassword)
    {
        alert("passwords don't match!");
        return;
    }
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
        setlogin(true);
      // User signed up successfully
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className='Head'>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            className='Login'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className='Login'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>ConfirmPassword:</label>
          <input
            className='Login'
            type="string"
            value={cpassword}
            onChange={(e) => confirmPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSignup}>Submit</button>
      </form>
      <Link to="/" >Go To Login</Link>
    </div>
  );
};

export default Signup;
