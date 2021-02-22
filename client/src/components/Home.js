import { useEffect, useContext } from 'react'
import { HomeContext } from '../context/HomeProvider.js'
import { authContext } from '../context/AuthProvider.js'
import Header from './Header.js'
import PublicSharesList from './PublicSharesList.js'

export default function Home() {
    const { allShares, getAllShares, heartShare } = useContext(HomeContext)
    const { user } = useContext(authContext)

    useEffect(() => {
        getAllShares()
    }, [])

    return (
        <div>
            <Header />
            <PublicSharesList 
                allShares={allShares} 
                heartShare={heartShare} 
                userObj={user}
            />
        </div>
    )
}