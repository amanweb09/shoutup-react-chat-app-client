import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Authenticate from './pages/Authenticate'
import Activate from './pages/Activate'
import Rooms from './pages/Rooms'

//USER HAS FILLED PHONE NUMBER AND OTP
let isAuth = false

//USER HAS FILLED FULL NAME AND PROFILE PICTURE
const user = {
    activated: false
}

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
                    <Route path='/activate' element={
                        <SemiProtected>
                            <Activate />
                        </SemiProtected>
                    } />
                    <Route path='/rooms' element={
                        <ProtectedRoute>
                            <Rooms />
                        </ProtectedRoute>
                    } />
                </Routes>
            </Router>
        </>
    )
}

// USER HAS NOT FILLED ANYTHING
const GuestRoute = ({ children }) => {
    const location = useLocation()

    if (isAuth) {
        return <Navigate to='/rooms' state={{ from: location }} />
    }

    return children 
}

// USER HAS ONLY FILLED PHONE NUMBER AND OTP
const SemiProtected = ({ children }) => {
    const location = useLocation()

    if (!isAuth) {
        return <Navigate to='/' state={location} replace/>
    }
    else if (isAuth && !user.activated) {
        return  children
    }

    return <Navigate to='/rooms' state={location} />

}

//USER HAS FILLED FULL NAME AND PROFILE PICTURE
const ProtectedRoute = ({ children }) => {
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to='/' state={location} />
    }
    else if (isAuth && !user.activated) {
        return <Navigate to='/activate' state={location} />
    }

    return children 
}

export default App
