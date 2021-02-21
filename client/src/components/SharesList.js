import { useState } from 'react'
import ShareForm from './ShareForm.js'
import Share from './Share.js'

export default function SharesList(props) {
    const [displayShareForm, setDisplayShareForm] = useState(false)
    const { userShares, addShare, editShare, deleteShare } = props
    function toggleForm() {
        setDisplayShareForm(prev => !prev)
    }
    const shareComponents = userShares.map(share => <Share key={share._id} {...share} editShare={editShare} deleteShare={deleteShare} />)
    return (
        <div className="shares-list-container">
            {
                displayShareForm ?
                    <>
                        <ShareForm submit={addShare} btnText="Share!" toggleEditForm={toggleForm} />
                        <p className="hide-form" onClick={() => toggleForm()}>Hide form</p>
                    </>
                :
                    <h3 className="share-st-new" onClick={() => toggleForm()}>Share something new</h3>
            }
            { userShares.length > 1 && <h3 style={{
                    color: "whitesmoke", 
                    fontFamily: "sans-serif", 
                    textAlign: "center"}}>Your shares:</h3>}
            {shareComponents}
        </div>
    )
}