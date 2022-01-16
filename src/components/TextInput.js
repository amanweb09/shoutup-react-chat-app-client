import React from 'react'

const TextInput = (props) => {
    return (
        <div>
            <input
                style={{
                    background: '#525252', 
                    border: 'none',
                    padding: '10px 20px',
                    color: '#fff',
                    fontSize: '18px',
                    borderRadius: '10px',
                    outline: 'none',
                    width: props.fullwidth === 'true' ? '100%' : '300px'
                }}
                type="text"
                {...props}
            />
        </div>
    )
}

export default TextInput
