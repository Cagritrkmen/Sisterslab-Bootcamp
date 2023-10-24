import React from 'react'
import diceImages from './../../assets/index'
import "./index.css"

function Dice({ currentStatus }) {
  
  return (
    <div>

      <img className='special' style={{ width: '200px' }}
        src={diceImages[`${currentStatus}`-1]}
        alt=""
      />
      </div>
  )
}

export default Dice