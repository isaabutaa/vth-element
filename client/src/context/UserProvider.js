import React, { useState } from 'react'
import { userAxios } from './AuthProvider.js'

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const [userShares, setUserShares] = useState([])

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

    function editShare(updatedShare, shareId) {
        userAxios.put(`/protected/shares/${shareId}`, updatedShare)
            .then(res => setUserShares(userShares => userShares.map(share => share._id === shareId ? res.data : share)))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function deleteShare(shareId) {
        userAxios.delete(`/protected/shares/${shareId}`)
            .then(res => setUserShares(userShares => userShares.filter(share => share._id !== shareId)))
            .catch(err => console.error(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider 
            value={{
                userShares,
                getUserShares,
                addShare,
                editShare,
                deleteShare
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}