import React from 'react'

const Button = ({ text }) => {
    return (
        <button
            style={{
                background: '#0063d4',
                padding: '10px 20px',
                border: 'none',
                outline: 'none',
                margin: '0 auto',
                color: '#fff',
                fontSize: '1.1rem',
                borderRadius: '50px',
                fontWeight: 'bold',
                cursor: 'pointer'
            }}>
            {text} &#8594;
        </button>
    )
}

export default Button
