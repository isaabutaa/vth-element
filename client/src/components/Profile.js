import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { authContext } from '../context/AuthProvider.js'
import SharesList from './SharesList.js'
import About from './About.js'

export default function Profile(props) {
    const { user: {username, _id, memberSince} } = useContext(authContext)
    const { userShares, userAboutMe, addShare, editShare, deleteShare, getUserShares, saveAboutMe, getAboutMe } = useContext(UserContext)

    useEffect(() => {
        if(userAboutMe.length > 0) {
            console.log("hey!!!")
            getAboutMe(_id)
        }
        getUserShares()
    }, [])

    return (
        <div>
            <h1 className="user-greeting">Hello, {username}.</h1>
            <About 
                userAboutMe={userAboutMe}
                saveAboutMe={saveAboutMe}
            />
            <SharesList 
                userShares={userShares} 
                addShare={addShare}
                editShare={editShare}
                deleteShare={deleteShare} 
            />
        </div>
    )
}