import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestLogin = async () => fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((data) => data.json());

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await requestLogin();
    if (response.message) return alert(response.message);
    localStorage.setItem('token', response.token);
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={ loginUser }>
        <input placeholder="email" onChange={ (e) => setEmail(e.target.value) } />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
