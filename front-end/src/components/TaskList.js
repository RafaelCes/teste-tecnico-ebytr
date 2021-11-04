import React, { useEffect, useState, useContext } from 'react';
import { loadingContext } from '../pages/TaskListPage';
import UpdateTask from './UpdateTask';

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(-1);
  const [sortedList, setSortedList] = useState([]);
  const { loading, setLoading, order } = useContext(loadingContext);

  const fetchTasks = async () => fetch('http://localhost:3001/tasks', {
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
    setIsEditing(-1);
  }, [order, loading]);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    setLoading(true);
  };

  const orderList = () => {
    if (order === 'alfabetica') {
      return setSortedList(taskList
        .sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))));
    }
    if (order === 'status') {
      return setSortedList(taskList
        .sort((a, b) => ((a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))));
    }
    if (order === 'data') {
      return setSortedList(taskList
        .sort((a, b) => ((a.title > b.date) ? 1 : ((b.title > a.date) ? -1 : 0))));
    }
  };

  useEffect(() => {
    orderList();
    setLoading(true);
  }, [order]);
  return (
    <ul style={ { listStyleType: 'none' } }>
      {/* {console.log(sortedList)} */}
      {sortedList.map((task, index) => (<li key={ task._id }>
        { isEditing === index
          ? <UpdateTask id={ task._id } />
          : <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
              status:
              {task.status}
            </p>
            <button type="button" onClick={ () => setIsEditing(index) }>editar</button>
            </div>}
        <button type="button" onClick={ () => deleteTask(task._id) }>Excluir</button>
      </li>))}
    </ul>
  );
}
