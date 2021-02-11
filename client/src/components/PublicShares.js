import Share from './Share.js'

export default function PublicShares(props) {
    const { allShares } = props

    const renderedPublicShares = allShares.map(share => <Share {...share} key={share._id} />)
    return (
        <div className="public-shares">
            { renderedPublicShares }
        </div>
    )
}