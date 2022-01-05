import React, { useState } from 'react'
import PhoneEmail from './PhoneEmail'
import OTP from './OTP'

const steps = {
    1: PhoneEmail,
    2: OTP
}
const Authenticate = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1)
    }

    return (
        <div>
            <Step onNext={onNext} />
        </div>
    )
}

export default Authenticate
