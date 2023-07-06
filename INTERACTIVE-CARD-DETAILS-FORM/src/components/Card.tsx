import React from 'react'
import '../styles/components/Card.sass'
const Card = () => {
  return (
    <div className="card">
      <span className='card-balls'>
        <div></div>
        <div></div>
      </span>
      <span className='card-number'>0000 0000 0000 0000</span>
      <span className='card-information'>
       <span className='card-information-name'>JANE APPLESEED</span> 
       <span className='card-information-date'>00/00</span> 
      </span>
    </div>
  )
}

export default Card