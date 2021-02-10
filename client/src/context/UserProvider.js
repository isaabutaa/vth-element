import React, { useState } from 'react'
import { userAxios } from './AuthProvider.js'

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const [userShares, setUserShares] = useState([])
    const [userAboutMe, setUserAboutMe] = useState("")

    function getUserShares() {
        userAxios.get("/protected/shares/userShares")
            .then(res => setUserShares(res.data))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function addShare(newShare) {
        userAxios.post("/protected/shares", newShare)
            .then(res => setUserShares(userShares => ([...userShares, res.data])))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function editShare(shareId, updatedShare) {
        userAxios.put(`/protected/shares/${shareId}`, updatedShare)
            .then(res => setUserShares(userShares => userShares.map(share => share._id === shareId ? res.data : share)))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function deleteShare(shareId) {
        userAxios.delete(`/protected/shares/${shareId}`)
            .then(res => setUserShares(userShares => userShares.filter(share => share._id !== shareId)))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function saveAboutMe(userAboutMeObj) {
        userAxios.post("/protected/about-me", userAboutMeObj)
            .then(res => setUserAboutMe(res.data.text))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function getAboutMe(userId) {
        userAxios.get("/protected/about-me/user")
            .then(res => {
                const aboutObj = res.data.find(el => el.user === userId)
                setUserAboutMe(aboutObj.text)
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider 
            value={{
                userShares,
                userAboutMe,
                getUserShares,
                addShare,
                editShare,
                deleteShare,
                saveAboutMe,
                getAboutMe
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}