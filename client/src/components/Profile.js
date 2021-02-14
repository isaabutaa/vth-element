import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { authContext } from '../context/AuthProvider.js'
import SharesList from './SharesList.js'
import About from './About.js'

export default function Profile() {
    const { user: {username, about}, saveAboutMe } = useContext(authContext)
    const { userShares, addShare, editShare, deleteShare, getUserShares } = useContext(UserContext)

    useEffect(() => {
        getUserShares()
    }, [])

    return (
        <div>
            <h1 className="user-greeting">Hello, {username}.</h1>
            <About 
                userAboutMe={about}
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