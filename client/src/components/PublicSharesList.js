import PublicShare from './PublicShare.js'

export default function PublicSharesList(props) {
    const { allShares, heartShare, userObj } = props

    const publicShares = allShares.map(share => <PublicShare 
                                                    {...share} 
                                                    key={share._id} 
                                                    heartShare={heartShare} 
                                                    userObj={userObj}
                                                />)
    return (
        <div className="public-shares">
            { publicShares }
        </div>
    )
}