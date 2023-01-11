import React from 'react'
import "../styles/rating.css"
import RatingCard from '../minors/RatingCard'

const Ratings = () => {
    const array = [
        {name:"Ronld Richard",position:"CEO-Ultra",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit dolorem Impedit velit dolorem "},
        {name:"Ronld Richard",position:"CEO-Ultra",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit dolorem Impedit velit dolorem "},
        {name:"Ronld Richard",position:"CEO-Ultra",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit dolorem Impedit velit dolorem "},
        {name:"Ronld Richard",position:"CEO-Ultra",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit dolorem Impedit velit dolorem "},
        {name:"Ronld Richard",position:"CEO-Ultra",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit dolorem Impedit velit dolorem "},
        {name:"Ronld Richard",position:"CEO-Ultra",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit dolorem Impedit velit dolorem "},
    ]
  return (
    <div id='rating'>
        <div className="heading">Dont take our words for <br /> it listens to our clients</div>
        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit velit dolorem  <br /> similique doloribus reprehenderit cum,
         earum reiciendis assumenda porro laborum?</div>
         <div className="allRatingCards">
            {array.map((crd)=>(
                <RatingCard crd={crd} />
            ))}
         </div>
    </div>
  )
}

export default Ratings