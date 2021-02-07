import React, {useState} from 'react'
import axios from 'axios'

export const authContext = React.createContext() 

export default function AuthProvider(props) {
    const [userState, setUserState] = useState({ user: {}, token: ""})

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                setUserState({ user, token })
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                setUserState({ user, token })
            })
            .catch(err => console.error(err.response.data.errMsg))
    }
    return (
        <authContext.Provider 
            value={{
                ...userState,
                login,
                signup
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}
