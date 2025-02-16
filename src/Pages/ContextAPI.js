import { useState } from "react"

const ContextAPI = () => {

    const [inputs, setInputs] = useState({})

    function handleInputs(event){
        const inputName = event.target.name
        const inputValue = event.target.value

        setInputs((prevValue) => ({...prevValue, [inputName]: inputValue}))

    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <>
        <div className="container mx-auto p-4">
            <div className='flex items-center justify-center'>
                <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Context API Example</h2>
                    <form action="#" method="POST" onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Full name</label>
                            <input type="text" id="name" name="name" value={inputs.name || ''} onChange={(e) => handleInputs(e)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={inputs.email || ''} onChange={(e) => handleInputs(e)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>


                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )

}

export default ContextAPI