import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Avatar.css'
import { setAvatar } from '../store/activateSlice'
import { activate } from '../http'

const Avatar = ({ onNext }) => {
    const dispatch = useDispatch();

    const [image, setImage] = useState('https://cdn-icons.flaticon.com/png/512/2931/premium/2931495.png?token=exp=1641568260~hmac=22ed707ff9f4bbce8d3c14756eb2ac25')
    const { name, avatar } = useSelector((state) => state.activate);

    const success = () => {
        
    }
    const failure = () => {

    }
    async function submit() { 
        try {
            await activate({name, avatar}, success, failure)
        } catch (error) {
            console.log(error);
        }
    }

    function captureImage(e) {
        const file = e.target.files[0]

        //built-in in browsers
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            setImage(reader.result)
            dispatch(setAvatar(reader.result))
        }
    }

    return (
        <>
            <Card
                title={`Okay, ${name}!`}
                icon='https://cdn-icons.flaticon.com/png/512/2931/premium/2931508.png?token=exp=1641567252~hmac=c583fe2f675817fab57ee8dc12ee706f' >

                <p className='sub-heading'>
                    How's this photo?
                </p>

                <div className="avatar-wrapper">
                    <img src={image} alt="" />
                </div>

                <input
                    type="file"
                    id='avatar_input'
                    className='avatar-input'
                    onChange={(e) => { captureImage(e) }} />
                <label htmlFor="avatar_input">Choose a different photo</label>

                <div style={{ marginTop: '20px' }} className='action-btn-wrapper'>
                    <Button text="next" onClick={submit} />
                </div>
            </Card>
        </>
    )
}

export default Avatar
