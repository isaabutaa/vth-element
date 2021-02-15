import { useState } from 'react'
import ShareForm from './ShareForm.js'

export default function Share(props) {
    const [showEditForm, setShowEditForm] = useState(false)
    const {shareText, _id, datePosted, likes, user, editShare, deleteShare}= props

    function toggleEditForm() {
        setShowEditForm(prev => !prev)
    }

    const date = datePosted.slice(0, datePosted.indexOf('T'))
    return (
        <div className="share">
            { showEditForm 
                ? 
                    <ShareForm toggleEditForm={toggleEditForm} text={shareText} btnText="Save" submit={editShare} shareId={_id} />
                :
                    <>
                        <h5>{shareText}</h5>
                        <p>shared: {date}</p>
                        <p onClick={toggleEditForm} className="edit">edit</p>
                        <p onClick={() => deleteShare(_id)} className="delete">delete</p>
                    </>
            }
        </div>
    )
}