import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.src} alt='Card' />
    </div>
  )
}

export default Card
