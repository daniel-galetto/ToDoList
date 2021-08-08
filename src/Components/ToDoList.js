import React from 'react'
import { useState } from 'react'
import uniqid from 'uniqid'


const ToDoList = () => {
    
    const [task,setTask] = useState('')
    const [list,setList] = useState([])
    const [edit,setEditTask] = useState(false)
    const [id,setId] = useState('')

    const addTask = (event)=> {
        event.preventDefault()
        const newTask = {
            id:uniqid(),
            taskName: task
        }
        setList([...list,newTask])
        setTask('')
    }

    const deleteTask = (id) => {
        const newTask = list.filter ( item => item.id !== id)
        setList(newTask)
    }

    const editTask = (item) => {
        setEditTask(true)
        setTask(item.taskName)
        setId(item.id)

    }

    const editlist = (e)=>{
        e.preventDefault()
        const newList = list.map(item => item.id === id ? {id:id, taskName:task} : item )
        setList(newList)
        setEditTask(false)
        setTask('')

    }


    return (
        <div>
        <h1>TO DO LIST</h1>
        <div className="container">
            <div className="row">
                <form className="form-group" onSubmit={edit? editlist : addTask} >
                    <h2>Enter Task's</h2>
                    <input onChange={(event)=>{setTask(event.target.value)}} value = {task} type="text" placeholder="ex: Paying taxes" required/>
                    <input className="btn btn-primary block m-3" type="submit" value={edit? "edit" : "Add"}/>
                </form>
            </div>
            <div className="row bg-danger">
                <h2>To Do</h2>  
                <ul>
                    {     
                        list.map(item => 
                            <li key={item.id}  className="list-group-item mt-2 p-4 bg-dark text-light">{item.taskName}
            
                                <button onClick= {()=> {deleteTask(item.id)}} className="btn btn-danger float-end "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                                </button>
                          
                                <button onClick= {()=> {editTask(item)}} className="btn btn-warning float-end "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>
                                </button>

                     
                       
                            </li>
                        )
                    }
                </ul>
      
            </div>
        </div>
        </div>
    )
}

export default ToDoList
