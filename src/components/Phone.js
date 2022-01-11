import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'
import TextInput from './TextInput'
import { sendOtp } from '../http'
import { useDispatch } from 'react-redux'
import { setOtp } from '../store/authSlice'

const Phone = ({ onNext }) => {
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()

    const success = (res) => {
        const { phone, hash } = res.data;
        dispatch(setOtp({
            phone,
            hash
        }))
        onNext()

    }
    const failure = (err) => {
        console.log(err);

    }
    async function submit() {
        if (!phone) {
            return
        }
        
        sendOtp({ phone }, success, failure)
    }

    return (
        <div>
            <Card
                title='Enter your phone number'
                icon='https://cdn3.iconfinder.com/data/icons/geest-women-kit/128/bag_icons-06-256.png' >

                <TextInput value={phone} onChange={(e) => { setPhone(e.target.value) }} />

                <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                    <Button text="next" onClick={submit} />
                </div>

                <p style={{ color: '#c4c5c5', width: '80%', margin: '0 auto', marginTop: '2rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

            </Card>
        </div>
    )
}

export default Phone
