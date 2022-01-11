import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'
import { logout } from '../http'
import { useDispatch } from 'react-redux'
import { setAuth } from '../store/authSlice'

const Navigation = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = () => {
        logout((res) => {
            const { data } = res;
            dispatch(setAuth(data));
            navigate('/')

        }, (err) => {
            console.log(err);
        })
    }

    return (
        <div className='nav-container'>
            <nav className='container'>
                <img src="/images/logo.png" alt="" onClick={() => { navigate('/') }} />
                <p onClick={() => { navigate('/') }}>ShoutUp</p>
            </nav>

            <button className='logout-btn' onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Navigation
