const AIAgent = () => {
    return (
        <div className="mx-auto p-4">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl ">
                    <form action="#" method="POST" autoComplete="off">
                        <div className="mb-4">
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter query" required />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Send</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AIAgent