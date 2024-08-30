// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from './actions';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    // Mock signup, replace with actual registration logic
    dispatch(signupUser({ username }));
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
