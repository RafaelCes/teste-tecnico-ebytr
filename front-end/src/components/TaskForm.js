import React, { useState, useContext } from 'react';

import { todoContext } from '../pages/TaskListPage';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const { fetchTasks } = useContext(todoContext);

  // faz a requisição para API adicionar uma nova tarefa
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
    fetchTasks();
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
        <label htmlFor="status">
          Status:
          <select id="status" onChange={ (e) => setStatus(e.target.value) }>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
            <option value="terminada">Terminada</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
