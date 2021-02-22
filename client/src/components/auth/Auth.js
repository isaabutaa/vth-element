import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../context/AuthProvider.js'
import LoginForm from './LoginForm.js'
import '../../stylesheets/Auth.css'

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
            <h1 className="title-1">{'< '}Vth Element{' />'}</h1>
            <LoginForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                btnText={loginOrSignup}
                {...loginCredentials} 
            />
            <p className="sub-form-txt" onClick={() => setBtnText()}>{memberOrNot}</p>
            <Link className="sub-txt-2" to="/vthelement"><p>What is <span className="vth-element">Vth Element</span>?</p></Link>
        </div>
    )
}