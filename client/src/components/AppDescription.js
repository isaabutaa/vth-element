import { Link } from 'react-router-dom'
import profileExample from '../app-screenshots/vthelement-frodo.PNG'
import homeExample from '../app-screenshots/vthelement-home.PNG'
import '../stylesheets/AppDescription.css'

export default function AppDescription() {
    return (
        <div className="description-container">
            <p className="description"><span className="vth-element">Vth Element</span> is a fun project created by a web development student studying at V School. It's meant to serve as an alternative way for students to connect, kind of like a social media app.</p>
            <p className="description">As a user, you'll be able to write a text-based 'share', or post, that you'll be able to edit or delete. That 'share' will feature on the Home page where other users will be able to like it. You'll also be able to like 'shares' posted by other users. You'll also be able to write a short About section on your profile.</p>
            <p className="description">Here's some of the UI:</p>
            <p className="screenshot-title">Profile page</p>
            <img src={profileExample} alt="User profile example" />
            <p className="screenshot-title">Home page</p>
            <img src={homeExample} alt="Homepage view example" />
            <p style={{textAlign: "center"}}><Link className="auth-link" to="/">Return to Login/Sign-up</Link></p>
        </div>
    )
}