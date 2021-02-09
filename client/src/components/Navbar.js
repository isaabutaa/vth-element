import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const { signout } = props
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/profile" >Profile</Link>
            <p className="signout-txt" onClick={() => signout()}>Signout</p>
        </div>
    )
}