import { useContext } from 'react'
import { authContext } from './context/AuthProvider.js'
import Header from './components/Header.js'
import Auth from './components/auth/Auth.js'
import Navbar from './components/Navbar.js'

export default function App() {
    const { token, signout } = useContext(authContext)
    const navbar = token && <Navbar signout={signout} />
    return (
        <div>
            <Header />
            <Auth />
            {navbar}
        </div>
    )
}