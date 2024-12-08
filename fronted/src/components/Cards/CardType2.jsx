import React from 'react'
import './CardType2.css'
const CardType2 = (props) => {
    return (
        <>
            <div className="card-type-2">
                <img src={props.img} alt="" />
                <div className="type"> {props.type} </div>
                <div className="title"> {props.title} </div>
                <div className="disc"> {props.disc} </div>
                <div className="rate">  <span className='blue'>{props.rate}</span> <span className='gray txt-1'> ₹/Night</span> </div>
            </div>
        </>
    )
}

export default CardType2