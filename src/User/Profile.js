import { useContext } from "react"
import UserContext from "../contextHook/userContext"

const Profile = () => {
    const {userInfo} = useContext(UserContext)
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h4 className={` text-2xl font-bold text-center mb-6`}>Your detail is</h4>
                    <div className="my-4">
                        <table className="border border-collapse border-1 bg-clip-padding" width="100%">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                            <tr>
                                <td>{userInfo.name}</td>
                                <td>{userInfo.email}</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile