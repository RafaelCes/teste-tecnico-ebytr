import React, { useEffect, useState, useContext } from 'react';
import TaskForm from './TaskForm';

import { loadingContext } from '../pages/TaskListPage';

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(-1);
  const [loading, setLoading] = useContext(loadingContext);

  const fetchTasks = async() => fetch('http://localhost:3001/tasks', {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  })
    .then((data) => data.json())
    .then((response) => setTaskList(response));

  useEffect(() => {
    const getData = async () => {
      await fetchTasks();
    };
    getData();
    setLoading(false);
  }, [loading]);

  const deleteTask = async(id) => { await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  });
    setLoading(true);
    }

  return (
    <ul style={{ listStyleType: "none" }}>
      {console.log(taskList)}
      {taskList.map((task, index) => {
        return (<li key ={task._id} >
          { isEditing === index ?
          <TaskForm />
          :<div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>status: {task.status}</p>
          <button type="button" onClick={() => setIsEditing(index)}>editar</button>
          </div>
          }
          <button type="button" onClick={() => deleteTask(task._id)}>Excluir</button>
        </li>);
      })}
    </ul>
  );
}
