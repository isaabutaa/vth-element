import {useState} from 'react'

export default function PublicShare(props) {
    const [toggleHeartColor, setToggleHeartColor] = useState(false)
    const { shareText, _id, datePosted, likes, user: {username}, like, unlike } = props
    const date = datePosted.slice(0, datePosted.indexOf('T'))
    const userName = <span style={{color: "blue"}}>{username}</span>
    const heartColor = toggleHeartColor ? "red" : "whitesmoke"
    const heart = <span style={{color: heartColor}} onClick={() => likeShare()}>&#10084;</span>

    function likeShare() {
        setToggleHeartColor(prev => !prev)
        toggleHeartColor ? unlike(_id) : like(_id)
    }

    return (
        <div className="share">
            <h5>{shareText}</h5>
            <p>shared by {userName} on {date}</p>
            <p style={{marginLeft: "5px"}}>{heart} {likes}</p>
        </div>
    )
}