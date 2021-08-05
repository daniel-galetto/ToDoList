import React from 'react'
import { useState } from 'react'
//+ Libreria que genera id
import uniqid from 'uniqid'


const ToDoList = () => {
    
    //+ optiene los valores que ingresan en el input
    const [task,setTask] = useState('')
    //+ guarda en una list los valores ingresados en el input
    const [list,setList] = useState([])
    //+ edita los contenidos de la list 
    const [edit,setEditTask] = useState(false)
    const [id,setId] = useState('')

    const addTask = (event)=> {
        //+ evita que se pierdan datos cuando se recarga la pagina
        event.preventDefault()
        //+ genera un objeto con un ID y la task
        const newTask = {
            id:uniqid(),
            taskName: task
        }
        //+ agrega el objeto ( task y iD ) en la list
        setList([...list,newTask])
        //+ hace que el input se borre el ultimo valor ingresado despues de un submit hay que Add  value = {task} en el input para que funcione
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
            <div className="row">
                <h2>To Do</h2>  
                <ul>
                    {
                        //+ con el metodo map recorremos los items que hay en la list y se genera un li por cada uno     
                        list.map(item => 
                            <li key={item.id}  className="list-group-item">{item.taskName}
                                <button onClick= {()=> {deleteTask(item.id)}} className="btn btn-danger float-end">Delete</button>
                                <button onClick= {()=> {editTask(item)}} className="btn btn-warning float-end">edit</button>
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
