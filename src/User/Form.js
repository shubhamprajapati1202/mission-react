import React, { useState, useContext } from "react"
import UserContext from "../contextHook/userContext"

const Login = () => {
    const [inputs, setInputs] = useState({})
    const {setUserInfo} = useContext(UserContext)

    function handleInput(event){
        const filedName = event.target.name
        const value = event.target.value

        setInputs((prevValue) => ({...prevValue, [filedName]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        setUserInfo(inputs)
    }
    return (

        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h4 className={` text-2xl font-bold text-center mb-6`}>Enter your information</h4>
                    <div className="my-4">
                    <form action="#" method="POST" onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={inputs?.name || ''} onChange={(e) => handleInput(e)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  required />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <div className='relative'>
                                <input type='text' id="email" name="email" value={inputs?.email || ''} onChange={(e) => handleInput(e)} className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login