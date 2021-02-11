import { useEffect, useContext } from 'react'
import { HomeContext } from '../context/HomeProvider.js'
import PublicSharesList from './PublicSharesList.js'

export default function Home(props) {
    const { allShares, getAllShares, heartShare, unHeartShare } = useContext(HomeContext)

    useEffect(() => {
        getAllShares()
    }, [])

    return (
        <div>
            Home page. All shares/posts go here.
            <PublicSharesList 
                allShares={allShares} 
                like={heartShare} 
                unlike={unHeartShare} 
            />
        </div>
    )
}