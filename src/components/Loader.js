import React from 'react'
import Card from './Card'
import '../css/Loader.css'

const Loader = ({ message }) => {
    return (
        <div style={{marginTop: '2rem'}} className='flex-center'>
            <Card>
                <img className='spinner' src="/images/loader.svg" alt="" />
                <span className='message'>{message}</span>
            </Card>
        </div>
    )
}

export default Loader
