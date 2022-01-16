import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css/Navbar.css'
import { logout } from '../http'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../store/authSlice'

const Navigation = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

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
        <div className='nav-container flex'>
            <nav className='container'>
                <img src="/images/logo.png" alt="" onClick={() => { navigate('/') }} />
                <p onClick={() => { navigate('/') }}>ShoutUp</p>
            </nav>

            <div className='nav-right flex-center'>
                {
                    user ?
                        <>
                            <h3>{user.name}</h3>
                            <NavLink to='/'>
                                <img src={user.avatar} className='profile-pic' alt='profile picture' />
                            </NavLink>
                            <button className='logout-btn' onClick={logoutUser}>&#8594;</button>
                        </>
                        : ""
                }
            </div>
        </div>
    )
}

export default Navigation
