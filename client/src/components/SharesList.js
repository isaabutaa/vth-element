import ShareForm from './ShareForm.js'
import Share from './Share.js'

export default function SharesList(props) {
    const { userShares, addShare } = props

    const shareComponents = userShares.map(share => <Share key={share._id} {...share} />)
    return (
        <div className="shares-list-container">
            <ShareForm addShare={addShare} />
            <h3 style={{
                    color: "whitesmoke", 
                    fontFamily: "sans-serif", 
                    textAlign: "center"}}>Your shares:</h3>
            {shareComponents}
        </div>
    )
}