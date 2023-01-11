import React from 'react'
import Card from '../minors/Card'
import {GoPerson} from 'react-icons/go'
import {AiFillMessage} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'


import "../styles/career.css"

const Career = () => {
    const cardArray = [
		{icon:<GoPerson />,heading:"7,000 support",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<AiFillMessage />,heading:"24/7 syupport",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<FaTelegramPlane />,heading:"Global Community",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."}
]
  return (
    <div id='career'>
        <div className="left">
            <div className="heading">Build powerful website for your startup</div>
            <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam doloribus incidunt aspernatur ipsam accusamus. Molestiae.</div>
            <button>Read More</button>
        </div>
        <div className="right">
            <div className="two">
                <Card crd={cardArray[0]} />
                <Card crd={cardArray[1]} />
            </div>
            <div className="one">
            <Card crd={cardArray[2]} />
            </div>
        </div>
    </div>
  )
}

export default Career