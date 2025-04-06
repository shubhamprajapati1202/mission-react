import { useState, useEffect } from 'react'
import TodoForm from '../Todo/Form'
import TodoList from '../Todo/List'
import { TodoProvider } from "../context/TodoContext"

const Todo = () => {
    const [todoList, setTodoList] = useState([])

    const addTodo = (obj) => {

        const isDataExist = todoList.find((data) => data?.data?.toLowerCase() === obj?.data?.toLowerCase())

        if(isDataExist){
            return false
        }

        setTodoList((prevValue) => [...prevValue, obj])
        return true
    }

    const deleteTodo = (index, id) => {
        todoList.splice(index, 1)
        setTodoList((prevValue) => [...todoList])
    }

    const updateTodo = (index=null, id=null, value=null) => {
        if(!id || !value){
            return false
        }

        const obj = todoList[index]
        
        obj.data = value
        
        todoList[index] = obj

        setTodoList((prevValue) => [...todoList])

        return true

    }

    useEffect(() => {
        const getSavedTodoList = JSON.parse(localStorage.getItem('todoList'))
        if(getSavedTodoList.length > 0){
            setTodoList(getSavedTodoList)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])



    return (
        <TodoProvider value={{ todoList, addTodo, deleteTodo, updateTodo }}>
            <div className="bg-gray-800 h-screen">
                <TodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    )
}

export default Todo