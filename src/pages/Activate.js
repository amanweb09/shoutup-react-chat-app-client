import React, { useState } from 'react'
import StepName from './StepName'
import Avatar from './Avatar'

const steps = {
    1: StepName,
    2: Avatar
}

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1)
    }

    return (
        <div style={{ paddingTop: '2rem' }} className='card-wrapper flex-center'>
            <Step onNext={onNext}></Step>
        </div>
    )
}

export default Activate
