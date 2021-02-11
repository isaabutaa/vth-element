import PublicShare from './PublicShare.js'

export default function PublicSharesList(props) {
    const { allShares, like, unlike } = props

    const publicShares = allShares.map(share => <PublicShare 
                                                    {...share} 
                                                    key={share._id} 
                                                    like={like} 
                                                    unlike={unlike} 
                                                />)
    return (
        <div className="public-shares">
            { publicShares }
        </div>
    )
}