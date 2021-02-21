import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authContext } from './context/AuthProvider.js'
import Header from './components/Header.js'
import Auth from './components/auth/Auth.js'
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'
import Home from './components/Home.js'
import AppDescription from './components/AppDescription.js'

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
                <Route path="/vthelement">
                    <AppDescription />
                </Route>
                <Route path="/profile">
                    { !token ? <Redirect to="/" /> : <Profile /> }
                </Route>
                <Route path="/home">
                    { !token ? <Redirect to="/" /> : <Home /> }
                </Route>
            </Switch>
            {navbar}
        </div>
    )
}