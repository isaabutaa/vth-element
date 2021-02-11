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

    // function heartShare() {

    // }

    return (
        <HomeContext.Provider 
            value={{
                allShares,
                getAllShares
            }}
        >
            { props.children }
        </HomeContext.Provider>
    )
}
