import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.js'
import './styles/styles.css'
import AuthProvider from './context/AuthProvider.js'
import UserProvider from './context/UserProvider.js'
import HomeProvider from './context/HomeProvider.js'

ReactDOM.render(
    <Router>
        <AuthProvider>
            <UserProvider>
                <HomeProvider>
                    <App />
                </HomeProvider>
            </UserProvider>
        </AuthProvider>
    </Router>, 
    document.getElementById('root')
)