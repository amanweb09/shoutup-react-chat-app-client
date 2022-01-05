import React, { useState } from 'react'
import '../css/OTP.css'
import Card from '../components/Card'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const OTP = ({ onNext }) => {
    const [OTP, setOTP] = useState('')

    return (
        <>
            <div style={{paddingTop: '2rem'}} className='card-wrapper flex-center'>
                <Card
                    title="Enter the verification code sent on your email"
                    icon='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/lock-256.png' >

                    <TextInput value={OTP} onChange={(e) => { setOTP(e.target.value) }} />

                    <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                        <Button text="next" />
                    </div>

                    <p style={{ color: '#c4c5c5', width: '80%', margin: '0 auto', marginTop: '2rem' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Card>
            </div>
        </>
    )
}

export default OTP
