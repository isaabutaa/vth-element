import { NavLink } from 'react-router-dom'
import '../stylesheets/Navbar.css'

export default function Navbar(props) {
    const { signout } = props
    const linkStyles = {
        color: "#ff073a", 
        fontFamily: "Bungee", 
        textDecorationLine: "underline"
    }
    return (
        <div className="navbar">
            <NavLink className="nav-link" activeStyle={linkStyles} to="/home">
                <p>Home</p>
            </NavLink>
            <NavLink className="nav-link" activeStyle={linkStyles} to="/profile" >
                <p>Profile</p>
            </NavLink>
            <p className="nav-link signout-txt" onClick={() => signout()}>Signout</p>
            <h1 className="vth-element-nav">{"< "}Vth Element{" />"}</h1>
        </div>
    )
}