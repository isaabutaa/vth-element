import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.js'
import './styles/styles.css'
import AuthProvider from './context/AuthProvider.js'

ReactDOM.render(
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>, 
    document.getElementById('root')
)