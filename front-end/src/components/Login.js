import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.Stringfy({
        email,
        password,
      }),
    });
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={ requestLogin }>
        <input placeholder="email" onChange={ (e) => setEmail(e.target.value) } />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <br />
        <button type="button">Login</button>
      </form>
      <button type="button">cadastrar-se</button>
    </div>
  );
}
