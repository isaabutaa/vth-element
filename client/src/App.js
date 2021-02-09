import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authContext } from './context/AuthProvider.js'
import Header from './components/Header.js'
import Auth from './components/auth/Auth.js'
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'

export default function App() {
    const { token, signout } = useContext(authContext)
    const navbar = token && <Navbar signout={signout} />
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    { token ? <Redirect to="/profile" /> : <Auth /> }
                </Route>
                <Route path="/profile">
                    { !token ? <Redirect to="/" /> : <Profile /> }
                </Route>
            </Switch>
            {navbar}
        </div>
    )
}