import { useEffect, useContext } from 'react'
import { HomeContext } from '../context/HomeProvider.js'
import PublicShares from './PublicShares.js'

export default function Home(props) {
    const { allShares, getAllShares } = useContext(HomeContext)

    useEffect(() => {
        getAllShares()
    }, [])

    return (
        <div>
            Home page. All shares/posts go here.
            <PublicShares allShares={allShares} />
        </div>
    )
}