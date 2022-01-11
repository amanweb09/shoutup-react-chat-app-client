import React, { useState } from 'react'
import '../css/OTP.css'
import Card from '../components/Card'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { verifyOtp } from '../http'
import { useSelector } from 'react-redux'         //fetching data from the store
import { setAuth } from '../store/authSlice'
import { useDispatch } from 'react-redux'

const OTP = ({ onNext }) => {
    const [OTP, setOTP] = useState('')
    const dispatch = useDispatch()

    const { phone, hash } = useSelector((state) => state.auth.otp)

    const success = (res) => {
        console.log(res);
        dispatch(setAuth(res.data))
        // onNext()
    }
    const failure = (err) => {
        console.log(err);
    }

    function submit() {
        if (!OTP ||!phone || !hash) {
            return;
        }

        verifyOtp({ otp: OTP, phone, hash }, success, failure)

    }
    return (
        <>
            <div style={{ paddingTop: '2rem' }} className='card-wrapper flex-center'>
                <Card
                    title="Enter the verification code sent on your email"
                    icon='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/lock-256.png' >

                    <TextInput value={OTP} onChange={(e) => { setOTP(e.target.value) }} />

                    <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                        <Button text="next" onClick={submit} />
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
