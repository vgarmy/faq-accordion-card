import React from 'react'
import './card.css'
import Accordian from '../accordian/Accordian'

const Card = () => {
  return (
    <div className='card_container'>
        <div className='card_container_image'>
            
        </div>
        <div className='card_container_accordian'>
          <h1>FAQ</h1>
            <Accordian />
        </div>
    </div>
  )
}

export default Card