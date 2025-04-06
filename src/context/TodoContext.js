import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todoList: [{
        id: null,
        data: null,
        isEditable: false
    }],
    addTodo: (obj) => {},
    updateTodo: (index=null, id=null, value=null) => {},
    deleteTodo: (index, id) => {}
})

export const TodoProvider = TodoContext.Provider

export const UseTodoContext = (() =>{
    return useContext(TodoContext)
})