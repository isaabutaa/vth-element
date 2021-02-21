import { useState } from 'react'

export default function PublicShare(props) {
    const { shareText, _id, datePosted, likes, likedUsers, user: { username }, heartShare, userObj } = props
    const { _id: userId } = userObj
    const alreadyLiked = likedUsers.includes(userId)
    const date = datePosted.slice(0, datePosted.indexOf('T'))
    const userName = <span style={{color: "#ff073a"}}>{username}</span>
    const [heartColor, setHeartColor] = useState(alreadyLiked ? "red" : "whitesmoke") // heart color state
    const heart = <span style={{color: heartColor}} onClick={() => likeShare()}>&#10084;</span>
    
    function likeShare() {
        if(alreadyLiked) {
            heartShare(_id, "unlike")
            setHeartColor("whitesmoke")
        } else {
            heartShare(_id, "like")
            setHeartColor("red")
        }
    }

    return (
        <div className="share">
            <h5>{shareText}</h5>
            <p>shared by {userName} on {date}</p>
            <p style={{marginLeft: "5px"}}>{heart} {likes}</p>
        </div>
    )
}