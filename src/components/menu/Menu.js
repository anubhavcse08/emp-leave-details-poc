import React from 'react';
import './Menu.scss';

const Menu = ({ onSortData, toggleView }) => {
    return (
        <div className='menu'>
            <div className='name'>
                <p>Anubhav Kumar</p>
            </div>
            <div className='content'>
                <button className='sort-view' onClick={() => onSortData()}>Sort</button>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => toggleView()} width="18" height="18" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /> </svg>
            </div>
        </div>
    )
}

export default Menu;