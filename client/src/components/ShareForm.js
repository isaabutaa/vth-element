import { useState } from 'react'

export default function ShareForm(props) {
    const { addShare } = props
    const [share, setShare] = useState({ shareText: "" })

    function handleSubmit(e) {
        e.preventDefault()
        addShare(share)
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
            <button>Share!</button>
        </form>
    )
}