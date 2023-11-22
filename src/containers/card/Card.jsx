import React from 'react'
import './card.css'
import Accordian from '../accordian/Accordian'
import box from '../../images/illustration-box-desktop.svg'
import women from '../../images/illustration-woman-online-mobile.svg'

const Card = () => {
  return (
    <div className='card_container' role="main">
        <div className='card_container_image'>
          <img src={box} className="imageBox" alt="box" />
          <img src={women} className="womenBox" alt="box" />
        </div>
        <div className='card_container_accordian'>
          <h1>FAQ</h1>
            <Accordian />
        </div>
    </div>
  )
}

export default Card