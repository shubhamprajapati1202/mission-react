import { UseTodoContext } from "../context/TodoContext"
import { useRef, useState } from "react"

const List = () => {
    const inputField = useRef()
    const [input, setInput] = useState('')
    const { todoList, deleteTodo, updateTodo } = UseTodoContext()
    const [isEditable, makeEditable] = useState(null)

    const editData = (id, data) => {
        setInput(data)
        makeEditable(id)
    }

    const updateTodoData = (index, id) => {
        if(!input){
            return inputField.current.focus()
        }

        const isUpdated = updateTodo(index, id, input)

        if(isUpdated){
            setInput('')
            makeEditable(null)
        }
    }


    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md mt-10">
                {todoList.map((obj, index) => (
                    <div className="relative mb-3" key={obj?.id}>

                        {(isEditable !== obj?.id) &&
                            <div className="block w-full rounded-md bg-pink-300 px-3 py-2 pr-20 text-base outline-1 outline-gray-300">
                                {obj?.data}
                            </div>
                        }

                        {(isEditable === obj?.id) &&
                            <input
                                id="task-input"
                                name="task"
                                type="text"
                                autoComplete="off"
                                className="block w-full rounded-md bg-white px-3 py-2 pr-20 text-base outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                placeholder="Enter task"
                                value={input}
                                ref={inputField}
                                onChange={(e) => setInput(e.target.value)}

                            />
                        }

                        <div
                            className="absolute inset-y-0 right-2 m-1 text-sm font-semibold flex gap-3"
                        >
                            {(isEditable !== obj?.id) &&
                                <span className="text-blue-500 shadow-xs hover:text-blue-900 hover:cursor-pointer" onClick={(e) => editData(obj?.id, obj?.data)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </span>
                            }

                            {(isEditable === obj?.id) &&
                                <span className="text-green-500 shadow-xs hover:text-green-900 hover:cursor-pointer" onClick={(e) => updateTodoData(index, obj?.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                            }


                            <span className="text-red-500 shadow-xs hover:text-red-900 hover:cursor-pointer" onClick={(e) => deleteTodo(index, obj?.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default List
