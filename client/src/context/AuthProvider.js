import React, {useState} from 'react'
import axios from 'axios'

export const authContext = React.createContext() 
export const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const initUserState = {
    user: JSON.parse(localStorage.getItem) || {},
    token: localStorage.getItem("token") || ""
}

export default function AuthProvider(props) {
    const [userState, setUserState] = useState(initUserState)

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState({ user, token })
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState({ user, token })
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function signout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUserState({ user: {}, token: "" })
    }
    
    return (
        <authContext.Provider 
            value={{
                ...userState,
                login,
                signup,
                signout
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}
