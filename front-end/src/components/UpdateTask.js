import React, { useState, useContext } from 'react';

import { loadingContext } from '../pages/TaskListPage';

export default function UpdateTask(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const { setLoading } = useContext(loadingContext);
  const { id } = props;
  const updateTask = async (e, id) => {
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
    setLoading(true);
  };

  return (
    <div>
      <form onSubmit={ (e) => updateTask(e,id) }>
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
          <option value="terminada">Terminada</option>
        </select>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
