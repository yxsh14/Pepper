import React from 'react'

const HomeCard = ({heading,top}) => {
  return (
    <div id='homeCard'>
        <div className="headingCard">{heading}</div>
        <div className="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto doloremque inventore, possimus perspiciatis consequatur 
            maiores alias architecto consectetur eius voluptatibus, eaque fugiat? Animi, ea ex!
        </div>
        {top && <div  className="btns">
            <div className='b' id="b1">
                <div className="num">120+</div>
                <div className="word">Useful Widget</div>
            </div>
            <div className='b' id="b2">
                <div className="num">120+</div>
                <div className="word">Useful Widget</div>
            </div>
            <div className='b' id="b3">
                <div className="num">120+</div>
                <div className="word">Useful Widget</div>
            </div>
        </div>}
        {!top && <div className="cardBtns">
            <button className="button1">Get Started Now</button>
            <button className="button2">Compare plans</button>
        </div>}
        <img src="/homeCard1.png" alt="" id="homeCard1" />
        <img src="/homeCard2.png" alt="" id="homeCard2" />
    </div>
  )
}

export default HomeCard