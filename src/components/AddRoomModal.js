import React, { useState } from 'react'
import '../css/AddRoomModal.css'
import TextInput from './TextInput'
import { createRoom as create } from '../http'
import { useNavigate } from 'react-router-dom'

const AddRoomModal = ({ onClose }) => {

    const [roomType, setRoomType] = useState('open');
    const [topic, setTopic] = useState('');

    const navigate = useNavigate();

    function success(res) {
        navigate(`/rooms/${res.data.id}`)
    }
    function failure(err) {
        console.log(err);
    }
    function createRoom() {
        if (!topic) return;

        create({ topic, roomType }, success, failure)
    }

    return (
        <div className='modal-mask flex-center'>
            <div className="modal-body">
                <div className="modal-header">
                    <h3>Enter the topic to be discussed</h3>
                    <TextInput fullwidth="true" value={topic} onChange={(e) => { setTopic(e.target.value) }} />

                    <h4>Room Types</h4>
                    <div className="room-types">
                        {
                            roomType === 'open' ?
                                <div
                                    onClick={() => { setRoomType('open') }}
                                    style={{ background: "#262626" }} className="type-box flex-center">
                                    <span>Open</span>
                                </div>
                                :
                                <div
                                    onClick={() => { setRoomType('open') }}
                                    className="type-box flex-center">
                                    <span>Open</span>
                                </div>
                        }
                        {
                            roomType === 'social' ?
                                <div
                                    onClick={() => { setRoomType('social') }}
                                    style={{ background: "#262626" }} className="type-box flex-center">
                                    <span>Social</span>
                                </div>
                                :
                                <div
                                    onClick={() => { setRoomType('social') }}
                                    className="type-box flex-center">
                                    <span>Social</span>
                                </div>
                        }
                        {
                            roomType === 'private' ?
                                <div
                                    onClick={() => { setRoomType('private') }}
                                    style={{ background: "#262626" }} className="type-box flex-center">
                                    <span>Private</span>
                                </div>
                                :
                                <div
                                    onClick={() => { setRoomType('private') }}
                                    className="type-box flex-center">
                                    <span>Private</span>
                                </div>
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    <h4>Start a room, open to everyone</h4>
                    <button
                        onClick={createRoom}
                    >Let's Go</button>
                </div>

                <span
                    onClick={onClose}
                    className="close-modal">&times;</span>
            </div>
        </div>
    )
}

export default AddRoomModal
