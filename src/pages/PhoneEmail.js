import React, { useState } from 'react'
import Phone from '../components/Phone'
import Email from '../components/Email'
import '../css/PhoneEmail.css'

const phoneEmailMap = {
    phone: Phone,
    email: Email
}

const PhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone')
    const Component = phoneEmailMap[type];

    return (
        <>
            <div className="card-wrapper flex-center">
                <div>
                    <div className="button-wrapper flex">
                        {
                            type === 'phone' ?
                                <button style={{ background: '#0063d4' }} onClick={() => { setType('phone') }}><i class="fas fa-mobile-alt"></i></button>
                                :
                                <button onClick={() => { setType('phone') }}><i class="fas fa-mobile-alt"></i></button>
                        }
                        {
                            type === 'email' ?
                                <button style={{ background: '#0063d4' }} onClick={() => { setType('email') }}><i class="fas fa-envelope"></i></button>
                                :
                                <button onClick={() => { setType('email') }}><i class="fas fa-envelope"></i></button>
                        }
                    </div>
                </div>
                <Component onNext={onNext} />
            </div>

        </>
    )

}

export default PhoneEmail
