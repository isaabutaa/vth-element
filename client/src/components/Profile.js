import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import ShareForm from './ShareForm.js'
import SharesList from './SharesList.js'


export default function Profile(props) {
    const { userShares, userAboutMe, addShare, getUserShares } = useContext(UserContext)

    useEffect(() => {
        getUserShares()
    }, [])

    const shares = userShares[0] && (<div className="shares-list-container">
                                        <h3 style={{color: "whitesmoke", fontFamily: "sans-serif", textAlign: "center"}}>Your shares:</h3>
                                        <SharesList 
                                            userShares={userShares}
                                        />
                                    </div>)
    return (
        <div>
            <h1 className="user-greeting">Hello, @username</h1>
            <ShareForm 
                addShare={addShare} 
            />
            {shares}
        </div>
    )
}