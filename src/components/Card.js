import React from 'react'
import '../css/Card.css'

const Card = ({ title, icon, children }) => {
    return (

        <div className="card">
            <div className="heading-wrapper flex-center">
                <img src={icon} alt="" />
                <h1>{title}</h1>
            </div>

            {children}
        </div>
    )
}

export default Card
