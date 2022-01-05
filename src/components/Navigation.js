import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const Navigation = () => {

    const navigate = useNavigate();

    return (
        <nav className='container'>
            <img src="/images/logo.png" alt="" onClick={() => { navigate('/') }} />
            <p onClick={() => { navigate('/') }}>ShoutUp</p>
        </nav>
    )
}

export default Navigation
