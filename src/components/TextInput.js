import React from 'react'

const TextInput = (props) => {
    return (
        <div>
            <input
                style={{
                    background: '#525252', 
                    border: 'none',
                    padding: '10px 20px',
                    width: '300px',
                    color: '#fff',
                    fontSize: '18px',
                    borderRadius: '10px',
                    outline: 'none',
                    width: props.fullWidth === 'true' ? '100%' : 'inherit'
                }}
                type="text"
                {...props}
            />
        </div>
    )
}

export default TextInput
