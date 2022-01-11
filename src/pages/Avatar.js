import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Avatar.css'
import { setAvatar } from '../store/activateSlice'
import { activate } from '../http'
import { setAuth } from '../store/authSlice'
import Loader from '../components/Loader'

const Avatar = ({ onNext }) => {
    const dispatch = useDispatch();

    const [image, setImage] = useState('https://cdn-icons.flaticon.com/png/512/2931/premium/2931495.png?token=exp=1641568260~hmac=22ed707ff9f4bbce8d3c14756eb2ac25')
    const { name, avatar } = useSelector((state) => state.activate);
    const [loading, setLoading] = useState(false);

    const success = (res) => {
        if (res.data.auth) {
            dispatch(setAuth(res.data))
            setLoading(false)
        }
    }
    const failure = (err) => {
        console.log(err);
        setLoading(false)
    }
    async function submit() {
        if (!name || !avatar) {
            return;
        }
        
        setLoading(true)
        activate({ name, avatar }, success, failure)
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

    if (loading) {
        return <Loader message='Activation in Progress...' />
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
