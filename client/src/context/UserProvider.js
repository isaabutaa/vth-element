import React, { useState } from 'react'
import { userAxios } from './AuthProvider.js'

export const UserContext = React.createContext()

export default function UserProvider(props) {
    const [userShares, setUserShares] = useState([])
    const [userAboutMe, setUserAboutMe] = useState("")

    function getUserShares() {
        userAxios.get("/protected/shares/userShares")
            .then(res => {
                console.log(res.data[0])
                setUserShares(res.data)
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    function addShare(newShare) {
        userAxios.post("/protected/shares", newShare)
            .then(res => {
                setUserShares(userShares => ([...userShares, res.data]))
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider 
            value={{
                userShares,
                userAboutMe,
                getUserShares,
                addShare
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}