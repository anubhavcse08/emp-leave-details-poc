import React from 'react';
import './Card.scss';

const Card = ({ details }) => {
    const { title, days, months, reason, url } = details;
    return (
        <div className='card'>
            <div className='row title'>
                <p className='name'>{title}</p>
            </div>
            <div className='row'>
                <p className='leave-days'>{`Days: ${days}`}</p>
                <p className='leave-months'>{`Months: ${months}`}</p>
            </div>
            <div className=' row'>
                <p className='type'>{`Reason: ${reason}`}</p>
                <a className='url' href={url}>Visit for More Info</a>
            </div>
        </div>
    )
}

export default Card;
