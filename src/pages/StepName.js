import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../store/activateSlice'


const StepName = ({ onNext }) => {
    const dispatch = useDispatch()

    const { name } = useSelector((state) => state.activate)
    const [fullName, setFullName] = useState(name)

    function nextStep() {
        if (!fullName) {
            return;
        }

        dispatch(setName(fullName));
        onNext();
    }
    return (
        <>
            <Card
                title="What's your full name?"
                icon='https://www.transparentpng.com/thumb/sunglasses-emoji/bnlK5S-sunglasses-emoji-pic-images.png' >

                <TextInput
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value) }} />

                <p style={{ color: '#c4c5c5', width: '80%', margin: '0 auto', marginTop: '2rem' }}>
                    People use real names at Shoutup!
                </p>

                <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                    <Button text="next" onClick={nextStep} />
                </div>
            </Card>
        </>
    )
}

export default StepName
