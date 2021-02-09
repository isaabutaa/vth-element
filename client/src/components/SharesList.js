import Share from './Share.js'

export default function SharesList(props) {
    const { userShares } = props

    const shares = userShares.map(share => <Share key={share._id} {...share} />)
    return (
        <>
            {shares}
        </>
    )
}