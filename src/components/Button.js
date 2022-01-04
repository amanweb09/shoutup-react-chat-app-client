import React from 'react'
import '../css/Button.css'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={() => { onClick() }}>
            {text} &#8594;
        </button>
    )
}

export default Button
