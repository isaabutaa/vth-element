
export default function Share(props) {
    const {shareText, _id, datePosted, likes, user}= props
    const date = datePosted.slice(0, datePosted.indexOf('T'))
    return (
        <div className="share">
            <h5>{shareText}</h5>
            <p>shared: {date}</p>
            <p className="edit">edit</p>
            <p className="delete">delete</p>
        </div>
    )
}