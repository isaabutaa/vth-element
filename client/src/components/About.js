import AboutForm from './AboutForm.js'
import '../stylesheets/About.css'

export default function About(props) {
    const { userAboutMe, saveAboutMe } = props
    return (
        <div>
            {
                userAboutMe ?
                    <div className="about-container">
                        <h3>About:</h3>
                        <p>{userAboutMe}</p>
                    </div>
                :
                    <AboutForm 
                        saveAboutMe={saveAboutMe}
                    />
            }
        </div>
    )
}