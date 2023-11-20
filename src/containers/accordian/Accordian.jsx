import React, { useState } from 'react';
import './accordian.css'
import faq from './faq'
import arrow from '../../images/icon-arrow-down.svg'


const Accordian = () => {

  const [selected, setSelected] = useState(null)

  const toggleQuestion = (index) => {
    if (selected === index){
      return setSelected(null)
    }
    setSelected(index)
  }


  return (
    <>
      {faq.map((item, index) => (
        <div className='card_container_accordian_item' key={index}>
          <div className='card_container_accordian_question' onClick={() => toggleQuestion(index)}>
            <h2>{item.question}</h2>
            <span className={selected === index ? 'arrow_upside_down' : 'arrow_upside_up'}> <img src={arrow} alt="arrow" /></span>
          </div>
          <div className={selected === index ? 'card_container_accordian_answer show' : 'card_container_accordian_answer'}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Accordian