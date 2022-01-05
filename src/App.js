import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Authenticate from './pages/Authenticate'
let isAuth = true


const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path='/' element={
                        <GuestRoute>
                            <Home />
                        </GuestRoute>
                    } />
                    <Route path="/authenticate" element={
                        <GuestRoute>
                            <Authenticate />
                        </GuestRoute>
                    } />
                </Routes>
            </Router>
        </>
    )
}

const GuestRoute = ({ children }) => {
    const location = useLocation()

    if (isAuth) {
        return <Navigate to='/rooms' state={{ from: location }} />
    }

    return { children }
}

export default App
