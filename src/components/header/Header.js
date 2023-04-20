import React from 'react';
import './Header.scss';

const header = ({ onHandleSearch }) => {
  return (
    <div className='header'>
      <a className='title' href='www.google.com'>Dashboard</a>
      <div className='searchBar'>
        <input type='search' placeholder='Search by title' onChange={(e) => onHandleSearch(e)} />
      </div>
    </div>
  )
}

export default header;