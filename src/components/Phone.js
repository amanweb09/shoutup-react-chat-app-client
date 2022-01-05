import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import TextInput from './TextInput'

const Phone = ({onNext}) => {
    const [email, setEmail] = useState('')
    return (
        <div>
            <Card
                title='Enter your phone number'
                icon='https://cdn3.iconfinder.com/data/icons/geest-women-kit/128/bag_icons-06-256.png' >

                <TextInput value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                    <Button text="next" onClick={onNext} />
                </div>

                <p style={{ color: '#c4c5c5', width: '80%', margin: '0 auto', marginTop: '2rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

            </Card>
        </div>
    )
}

export default Phone
