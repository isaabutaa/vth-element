
export default function Share(props) {
    const {shareText, _id, datePosted, likes, user}= props
    return (
        <div className="share">
            <h4>{shareText}</h4>
            <p>shared: {datePosted}</p>
        </div>
    )
}