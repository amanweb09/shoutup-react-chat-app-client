import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
