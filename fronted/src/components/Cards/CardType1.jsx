import React from 'react'
import './CardType1.css'
const CardType1 = (props) => {
  return (
    <>
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card-cover"></div>
            <h1> {props.title} </h1>
            
        </div>
    </>
  )
}

export default CardType1