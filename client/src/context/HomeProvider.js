import React, { useState } from 'react'
import { userAxios } from './AuthProvider.js'
export const HomeContext = React.createContext()

export default function HomeProvider(props) {
    const [allShares, setAllShares] = useState([])

    function getAllShares() {
        userAxios.get("/protected/shares")
            .then(res => setAllShares(res.data))
            .catch(err => console.error(err.response.data.errMsg))
    }

    function heartShare(shareId, likeOrUnlike) {
        userAxios.put(`/protected/shares/${likeOrUnlike}/${shareId}`)
            .then(res => {
                setAllShares(shares => shares.map(share => share._id !== shareId ? share : res.data))
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    // function unHeartShare(shareId) {
    //     userAxios.put(`/protected/shares/unlike/${shareId}`)
    //         .then(res => {
    //             setAllShares(shares => shares.map(share => share._id !== shareId ? share : res.data))
    //         })
    //         .catch(err => console.error(err.response.data.errMsg))
    // }

    return (
        <HomeContext.Provider 
            value={{
                allShares,
                getAllShares,
                heartShare
                // unHeartShare
            }}
        >
            { props.children }
        </HomeContext.Provider>
    )
}
