import PublicShare from './PublicShare.js'

export default function PublicSharesList(props) {
    const { allShares } = props

    const publicShares = allShares.map(share => <PublicShare {...share} key={share._id} />)
    return (
        <div className="public-shares">
            { publicShares }
        </div>
    )
}