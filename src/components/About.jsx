import React from 'react'
import Ticks from '../minors/Ticks'

import "../styles/about.css"

const About = () => {
  return (
    <div id='about'>
        <div className="imgConBox">
            <img src="/about1.png" alt="" />
            <div className="content">
                <div className="heading">Manage and Track your Projects</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aspernatur temporibus doloremque cum ab sunt ea eveniet, suscipit culpa aut commodi.
                </div>
                <div className="allTicks">
                    <Ticks val="create reels post and stories" col={"rgba(132, 90, 255, 1)"} />
                    <Ticks val="facebook post dynamiccally" col={"rgba(132, 90, 255, 1)"} />
                    <Ticks val="schedule twitter points" col={"rgba(132, 90, 255, 1)"} />
                </div>
            </div>
        </div>
        <div className="imgConBox" id='aboutB2'>
            <div className="content">
                <div className="heading">Easily manage your team task</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aspernatur temporibus doloremque cum ab sunt ea eveniet, suscipit culpa aut commodi.
                </div>
                <div className="allTicks">
                    <Ticks val="create reels post and stories" col={"#00F59B"} />
                    <Ticks val="facebook post dynamiccally" col={"#00F59B"} />
                    <Ticks val="schedule twitter points" col={"#00F59B"} />
                </div>
            </div>
            <img src="/about2.png" alt="" />
        </div>
        <div className="imgConBox">
            <img src="/about3.png" alt="" />
            <div className="content">
                <div className="heading">Simple financila overview for you</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aspernatur temporibus doloremque cum ab sunt ea eveniet, suscipit culpa aut commodi.
                </div>
                <div className="allTicks">
                    <Ticks val="create reels post and stories" col={"#9D0AFF"} />
                    <Ticks val="facebook post dynamiccally" col={"#9D0AFF"} />
                    <Ticks val="schedule twitter points" col={"#9D0AFF"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About