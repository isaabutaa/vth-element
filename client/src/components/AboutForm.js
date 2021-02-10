import { useState } from 'react'

export default function AboutForm(props) {
    const [aboutUser, setAboutUser] = useState({ text: "" })
    const { saveAboutMe } = props

    function handleChange(e) {
        const {name, value} = e.target
        setAboutUser(aboutUser => ({ ...aboutUser, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        saveAboutMe(aboutUser)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea 
                type="text"
                name="text"
                placeholder="Share something about yourself..."
                value={aboutUser.text}
                onChange={handleChange}
            />
            <button>Save</button>
        </form>
    )
}