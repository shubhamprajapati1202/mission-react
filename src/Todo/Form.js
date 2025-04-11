import { useState, useRef } from "react"
import { UseTodoContext } from "../context/TodoContext"

const Form = () => {
    const inputField = useRef()
    const [input, setInput] = useState('')
    const {addTodo} =  UseTodoContext()
    const [error, setError] = useState('')

    const addTodoData = ((event) =>{
        event.preventDefault()

        if(!input){
            return inputField.current.focus()
        }

        const obj = {
            id: Date.now(),
            data: input,
            isEditable: false
        }

        const isDataExist = addTodo(obj)



        if(!isDataExist){
            setError('This data already exist')
            return inputField.current.focus()
        } 

        setInput('')
        setError('')

    })

    return (
        <form className="flex justify-center items-center" onSubmit={addTodoData}>
            <div className="w-full max-w-md mt-10">
                <p className="text-sm text-white mb-2">Create your task list.</p>

                <div className="relative">
                    <input
                        id="task-input"
                        name="task"
                        type="text"
                        autoComplete="off"
                        className="block w-full rounded-md bg-white px-3 py-2 pr-20 text-base outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                        placeholder="Enter task"
                        ref={inputField}
                        value={input || ''}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 m-1 rounded-md bg-indigo-600 px-4 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
                <div className="text-red-600 text-sm">{error}</div>
            </div>
        </form>
    )
}


export default Form
