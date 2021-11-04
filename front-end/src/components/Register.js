import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const requestUser = async () => fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((data) => data.json());

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await requestUser();
    if (response.message) return alert(response.message);
    alert('cadastro realizado com sucesso');
    window.location.reload();
  };

  return (
    <div>
      <h3>Cadastro</h3>
      <form onSubmit={ registerUser }>
        <input placeholder="name" onChange={ (e) => setName(e.target.value) } />
        <br />
        <input placeholder="email" onChange={ (e) => setEmail(e.target.value) } />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
