import React, { useEffect, useState } from 'react'

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    const taskList = fetch('http://localhost:3001/tasks', {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      'authorization': token,
    }
  })
  .then((data) => data.json());
  setTaskList(taskList);
  }, []);

  return (
    <div>
      {taskList.length && taskList.map((task) => {
        <li>
          {task.title}
          {task.description}
          {task.status}
        </li>
      })}
    </div>
  )
}
