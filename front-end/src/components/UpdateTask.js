import React, { useState, useContext } from 'react';

import { todoContext } from '../pages/TaskListPage';

export default function UpdateTask(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const { fetchTasks } = useContext(todoContext);
  const { id, setIsEditing } = props;

  const NEG = -1;

  // faz uma requisição na API para atualizar uma tarefa
  const updateTask = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
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
    setIsEditing(NEG);
    fetchTasks();
  };

  return (
    <div>
      <form onSubmit={ (e) => updateTask(e) }>
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
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
