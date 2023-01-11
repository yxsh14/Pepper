import React from 'react'

const Card = ({crd}) => {
  return (
    <div id='card'>
        <div className="icon">{crd.icon}</div>
        <div className="heading">{crd.heading}</div>
        <div className="text">{crd.text}</div>
    </div>
  )
}

export default Card