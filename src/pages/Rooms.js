import React, { useState } from 'react'
import AddRoomModal from '../components/AddRoomModal'
import RoomCard from '../components/RoomCard'
import '../css/Rooms.css'

const rooms = [
    {
        id: '1',
        topic: 'Best Movie in 2021',
        speakers: [
            {
                id: '1',
                name: 'Salman Khan',
                avatar: '/images/logo.png'
            },
            {
                id: '2',
                name: 'Shah rukh Khan',
                avatar: '/images/logo.png'
            },
            {
                id: '3',
                name: 'Varun Dhawan',
                avatar: '/images/logo.png'
            },
            {
                id: '4',
                name: 'Vicky Kaushal',
                avatar: '/images/logo.png'
            }
        ],
        totalPeople: 4
    },
    {
        id: '2',
        topic: "Why is The Sorcerer's Stream Shop the Best?",
        speakers: [
            {
                id: '1',
                name: 'Lucifer Morningstar',
                avatar: '/images/logo.png'
            },
            {
                id: '2',
                name: 'Tokyo',
                avatar: '/images/logo.png'
            },
            {
                id: '3',
                name: 'Eleven',
                avatar: '/images/logo.png'
            }
        ],
        totalPeople: 3
    },
    {
        id: '3',
        topic: 'Winters vs. Summers',
        speakers: [
            {
                id: '1',
                name: 'Guddu Pandit',
                avatar: '/images/logo.png'
            },
            {
                id: '2',
                name: 'Munna Tripathi',
                avatar: '/images/logo.png'
            },
            {
                id: '3',
                name: 'Sharad Shukla',
                avatar: '/images/logo.png'
            }
        ],
        totalPeople: 3
    },
    {
        id: '4',
        topic: 'React.js vs Angular.js',
        speakers: [
            {
                id: '1',
                name: 'Hero',
                avatar: '/images/logo.png'
            },
            {
                id: '2',
                name: 'Dholu',
                avatar: '/images/logo.png'
            },
            {
                id: '3',
                name: 'Babli',
                avatar: '/images/logo.png'
            }
        ],
        totalPeople: 3
    },
]

const Rooms = () => {
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true)
    }
    return (
        <>
            <div className="container">
                <div className="rooms-header flex">
                    <div className="left flex">
                        <span className="heading">All Voice Rooms</span>
                        <div className="search-box flex">
                            <input type="text" className='search-input' />
                        </div>
                    </div>
                    <div className="right">
                        <button
                            onClick={openModal}
                            className="start-room-btn">
                            <span>Start a Room</span>
                        </button>
                    </div>
                </div>

                <div className="room-list">
                    {
                        rooms.map((room) => {
                            return <RoomCard key={room.id} room={room} />
                        })
                    }

                </div>
            </div>
            {showModal && <AddRoomModal onClose={() => { setShowModal(false) }} />}

        </>
    )
}

export default Rooms
