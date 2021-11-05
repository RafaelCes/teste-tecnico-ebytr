import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export const todoContext = React.createContext();

export default function TaskListPage() {
  const [taskList, setTaskList] = useState([]);
  const [isAdding, setIsAdding] = useState(false); // toggle para nova tarefa
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('data'); // guarda a ordem que a lista deve ser exibida

  // função que busca as tarefas na api
  const fetchTasks = async () => fetch('http://localhost:3001/tasks', {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  })
    .then((data) => data.json())
    .then((response) => setTaskList(response));

  // fecha o forms para nova tarefa depois de adiciona-la
  useEffect(() => {
    setIsAdding(false);
  }, [taskList]);

  return (
    <div>
      <todoContext.Provider value={ { setLoading, order, fetchTasks, taskList } }>
        {loading ? 'loading' : ''}
        <TaskList />
        {!isAdding ? '' : <TaskForm />}
        <button type="button" onClick={ () => setIsAdding(!isAdding) }>
          Nova Tarefa
        </button>
        <select id="order" onChange={ (e) => setOrder(e.target.value) }>
          <option value="data">Data de criação</option>
          <option value="alfabetica">Alfabetica</option>
          <option value="status">Status</option>
        </select>
      </todoContext.Provider>
    </div>
  );
}
