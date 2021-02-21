import { Link } from 'react-router-dom'
import profileExample from '../app-screenshots/vth-element-example-profile.PNG'
import homeExample from '../app-screenshots/vth-element-homeview-example.PNG'

export default function AppDescription() {
    return (
        <div>
            <h3>What is the Vth Element?</h3>
            <p>The Vth Element is a fun project created by a web development student studying at V School. It's meant to serve as an alternative way for students to connect, kind of like a social media app.</p>
            <p>As a user, you'll be able to write a text-based 'share', or post, that you'll be able to edit or delete. That 'share' will feature on the Home page where other users will be able to like it. You'll also be able to like 'shares' posted by other users. Additionally, on your profile, you'll be able to write a short About section.</p>
            <p>Here's some of the UI:</p>
            {/* profile & write a post */}
            <img src={profileExample} alt="User profile example" />
            {/* home & like a post */}
            <img src={homeExample} alt="Homepage view example" />
            <p><Link to="/">Go to Login?Sign-up</Link></p>
        </div>
    )
}