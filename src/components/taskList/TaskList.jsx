import React, { useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import AddTask from '../addTask/AddTask'

const TaskList = () => {
  const listTask = []
  const [task, setTask] = useState(listTask)

  const handleTaskData = (newTask) => {
    const newTaskData = { ...newTask, id: Math.random().toString(), };

    setTask((prev) => [
      ...prev, newTaskData
    ]);

  }

  const handleDone = (id) => {
    setTask(prev => prev.map(item => item.id === id ? { ...item, status: !item.status } : item))
  }

  const handleDelete = (id) => {
    setTask(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <ListGroup>
        {task.map((item) => (
          <ListGroup.Item key={item.id} >
            <Form.Check type="checkbox" label={
              <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>{item.input}</span>
            } onChange={() => handleDone(item.id)} checked={item.status} />
            <Button variant="danger" onClick = {() => handleDelete(item.id)}>Eliminar tarea</Button>
          </ListGroup.Item>

        ))}
      </ListGroup>
      <AddTask onTaskData={handleTaskData} />
    </>
  )
}

export default TaskList
