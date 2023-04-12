import {React, useState, useEffect} from "react"
import Item from "./Item"
import Form from "./Form"
import '../styles/List.css'

export default function List() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if(localStorage.getItem('localTasks')) {
            const storedTasks = JSON.parse(localStorage.getItem('localTasks'))
            setTasks(storedTasks)
        }
    }, [tasks])

    function addTask(lastTask) {
        setTasks([lastTask, ...tasks])
        localStorage.setItem('localTasks', JSON.stringify([lastTask, ...tasks]))
    }

    function deleteTask(id) {
        const updateTask = tasks.filter(task => task.id !== id)
        setTasks(updateTask)
        localStorage.setItem('localTasks', JSON.stringify(updateTask))
    }

    function completedTask(id) {
    const updateTask  = tasks.map (task => {
            if(task.id === id) {
                task.completed = !task.completed
            }
            return task
        })
        setTasks(updateTask)
        localStorage.setItem('localTasks', JSON.stringify(updateTask))
    }

    function handleClear() {
        setTasks([]);
        localStorage.removeItem('localTasks')
    }

    return (
        <div className="todo-container">
            <h4 className="title">To Do List</h4>
            <Form onSubmit={addTask}/>
            <div className="list-container">
                <div className='lists'>
                    {tasks.map((task) => 
                    <Item 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed} 
                        deleteTask={deleteTask}
                        completedTask={completedTask}
                    />
                    )}
                </div>
                {!tasks.length ? null : (
                    <div className='clear-button-container'>
                        <button className="clear-button" onClick={handleClear}>Clear Tasks</button>
                    </div>
                ) }
            </div>
      </div>
    )
}