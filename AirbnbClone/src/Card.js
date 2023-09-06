import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.src} alt='Card' />
      <div className='card__info'>

      </div>
    </div>
  )
}

export default Card
