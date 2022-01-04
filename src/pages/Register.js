import React, { useState } from 'react'
import '../css/Register.css'
import PhoneEmail from './PhoneEmail'
import OTP from './OTP'
import StepName from './StepName'
import Avatar from './Avatar'
import Username from './Username'

const steps = {
    1: PhoneEmail,
    2: OTP,
    3: StepName,
    4: Avatar,
    5: Username
}

const Register = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1)
    }

    return (
        <div>
        <Step onNext={onNext}/>        
        </div>
    )
}

export default Register
