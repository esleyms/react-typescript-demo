import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        // Implementação do handleLogin
    };

    const handleLogout = () => {
        // Implementação do handleLogout
        setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com'
        })
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name } </div>
            <div>User email is {user?.email }</div>
        </div>
    )
}
