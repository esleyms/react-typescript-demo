import { useState } from "react"



export const LoggedIn = () => {

    const [isLoggedIn, setLoggedIn] = useState(false)

    const handleLongin = () => {
        setLoggedIn(true)
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }


    return (
        <div>
            <button onClick={handleLongin}>Longin</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn.length? 'logged in' :  'logged out'}</div>
        </div>
    )
}