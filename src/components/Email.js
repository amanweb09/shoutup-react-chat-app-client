import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import TextInput from './TextInput'

const Email = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <Card
            title='Enter your Email ID'
            icon='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Gmail_envelope_letter_email-256.png'
        >
            <TextInput value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />

            <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                <Button text="next" onClick={onNext} />
            </div>

            <p style={{ color: '#c4c5c5', width: '80%', margin: '0 auto', marginTop: '2rem' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

        </Card>
    )
}

export default Email
