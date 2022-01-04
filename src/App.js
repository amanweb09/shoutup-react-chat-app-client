import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
