import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const { signout } = props
    return (
        <div className="navbar">
            <Link to="/home">
                <p className="nav-link">Home</p>
            </Link>
            <Link to="/profile" >
                <p className="nav-link">Profile</p>
            </Link>
            <p className="nav-link signout-txt" onClick={() => signout()}>Signout</p>
        </div>
    )
}