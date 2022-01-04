import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import '../css/Home.css'

const Home = () => {

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/register')
    }

    return (
        <div className='card-wrapper flex-center'>
            <Card
                title='Welcome to Shoutup!'
                icon='/images/logo.png'
            >
                <p className='card-text'>
                    we welcome you to Shoutup, a responsive, react-based web realtime communication application
                    to make communication a doodle...
                </p>

                <Button
                    text='Get your username'
                    onClick={onClick}
                />

                <div className='signin-wrapper'>
                    <span>Have an invitation text?</span>
                    <NavLink to='/login'>Sign in</NavLink>
                </div>
            </Card>
        </div>
    )
}

export default Home
