import React, { useState, useContext } from 'react';

import { loadingContext } from '../pages/TaskListPage';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const [, setLoading] = useContext(loadingContext);

  const addNewTask = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        title,
        description,
        status,
      }),
    });
    setLoading(true);
  };

  return (
    <div>
      <form onSubmit={ addNewTask }>
        <input placeholder="título" onChange={ (e) => setTitle(e.target.value) } />
        <br />
        <textarea
          placeholder="descrição"
          onChange={ (e) => setDescription(e.target.value) }
        />
        <br />
        <label htmlFor="status">Status:</label>

        <select id="status" onChange={ (e) => setStatus(e.target.value) }>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em andamento</option>
          <option value="concluida">concluida</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
