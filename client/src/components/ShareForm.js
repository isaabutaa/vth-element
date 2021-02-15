import { useState } from 'react'

export default function ShareForm(props) {
    const { submit, btnText, text, shareId, toggleEditForm } = props
    const [share, setShare] = useState({ shareText: text || "" })

    function handleSubmit(e) {
        e.preventDefault()
        submit(share, shareId)
        toggleEditForm()
        setShare({ shareText: "" })
    }

    function handleChange(e) {
        const {name, value} = e.target
        setShare(share => ({ ...share, [name]: value }))
    }

    return (
        <form className="form share-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Share here..."
                name="shareText"
                value={share.shareText}
                onChange={handleChange}
            />
            <button>{btnText}</button>
        </form>
    )
}