import React from 'react'
import '../css/Card.css'

const Card = ({ title, icon, children }) => {
    return (

        <div className="card">
            <div className="heading-wrapper flex-center">
                {icon && <img src={icon} alt="" />}     {/* short form for if else */}
                {title && <h1>{title}</h1>}     {/* short form for if else */}

            </div>

            {children}
        </div>
    )
}

export default Card
