import {useEffect} from 'react'

export default function PublicShare(props) {
    const { shareText, _id, datePosted, likes, user: {username} } = props
    const date = datePosted.slice(0, datePosted.indexOf('T'))
    const userName = <span style={{color: "blue"}}>{username}</span>

    useEffect(() => console.log(typeof user), [])
    return (
        <div className="share">
            <h5>{shareText}</h5>
            <p>shared by {userName} on {date}</p>
            <p>Likes: {likes}</p>
        </div>
    )
}