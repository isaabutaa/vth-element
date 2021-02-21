import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../context/AuthProvider.js'
import LoginForm from './LoginForm.js'

export default function Auth() {
    const [loginCredentials, setLoginCredentials] = useState({ username: "", password: "" })
    const [loginOrSignup, setLoginOrSignup] = useState("Login")
    const {signup, login} = useContext(authContext)

    function handleSubmit(e) {
        e.preventDefault()
        loginOrSignupFunc() 
    }

    function handleChange(e) {
        const {name, value} = e.target
        setLoginCredentials(prev => ({...prev, [name]: value}))
    }

    function setBtnText() {
        setLoginOrSignup(prev => prev === "Login" ? "Sign Up" : "Login")
    }

    function loginOrSignupFunc() {
        loginOrSignup === "Login" ? login(loginCredentials) : signup(loginCredentials)
    }

    const memberOrNot = loginOrSignup === "Login" ? "Not a member? Sign Up" : "Already a member? Login"
    return (
        <div>
            <LoginForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                btnText={loginOrSignup}
                {...loginCredentials} 
            />
            <p className="toggle-member-txt" onClick={() => setBtnText()}>{memberOrNot}</p>
            <p><Link to="/about-vthelement">What is the Vth Element?</Link></p>
        </div>
    )
}