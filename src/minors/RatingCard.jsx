import React from 'react'
import {RiStarSFill} from 'react-icons/ri'

const RatingCard = ({crd}) => {
  return (
    <div id='ratingCard'>
        <div className="ratingText">{crd.text}</div>
        <div className="stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
        </div>
        <div className="name">{crd.name}</div>
        <div className="position">{crd.position}</div>
    </div>
  )
}

export default RatingCard