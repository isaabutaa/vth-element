import ShareForm from './ShareForm.js'
import Share from './Share.js'

export default function SharesList(props) {
    const { userShares, addShare, editShare, deleteShare } = props

    const shareComponents = userShares.map(share => <Share key={share._id} {...share} editShare={editShare} deleteShare={deleteShare} />)
    return (
        <div className="shares-list-container">
            <ShareForm submit={addShare} btnText="Share!" />
            { userShares.length > 1 && <h3 style={{
                    color: "whitesmoke", 
                    fontFamily: "sans-serif", 
                    textAlign: "center"}}>Your shares:</h3>}
            {shareComponents}
        </div>
    )
}