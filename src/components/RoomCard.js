import React from 'react'
import '../css/RoomCard.css'

const RoomCard = ({ room }) => {
    return (
        <div className='rooms-card'>
            <h3 className='topic'>{room.topic}</h3>
            <div className="speakers flex">
                <div className="avatars flex">
                    {
                        room.speakers.map((speaker) => {
                            return <img key={speaker.id} src={speaker.avatar} alt="avatar" />
                        })
                    }
                </div>
                <div className="names">
                    {
                        room.speakers.map((speaker) => {
                            return <span>{speaker.name}</span>
                        })
                    }
                </div>

            </div>
                <div className="people-count">
                    <span>{room.totalPeople}</span>
                </div>

        </div>
    )
}

export default RoomCard
