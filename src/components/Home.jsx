import React from 'react'
import "../styles/home.css"
import HomeCard from '../minors/HomeCard'
import Ticks from '../minors/Ticks'
import Card from '../minors/Card'
import {AiFillMail} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl'
import {GoPerson} from 'react-icons/go'
import {AiFillAppstore} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'

const Home = () => {
	const voiletArray = ["Private and Public Chat","Appointment","Event Schedule"];
	const greenArray = ["videot","Event controller","Event Schedule"];
	const cardArray = [
		{icon:<AiFillMail />,heading:"Email management",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<SlCalender />,heading:"Calender Campign",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<GoPerson />,heading:"Personal Assistance",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<AiFillMail />,heading:"Payment features",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<AiFillAppstore />,heading:"Utility Apps",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
		{icon:<IoMdNotifications />,heading:"Sale notification",text:"orem ipsum dolor sit, amet consectetur adipisicing elit. Vero sit iusto fuga ea nesciunt autem, officia ut ducimus sequi officiis."},
]
    return (
		<div id='home'>
			<div className='heading'>Save more and get your<br /> finance right</div>
			<div className='content'>Lorem ipsum, dolor sit amet consectetur adipisi1
				cing elit. Illo eligendi fugiat odit, labore eaque ducimus ex velit commodi! Dolores eum recusandae, explicabo ex voluptatem praesentium.
			</div>
			<button className="btn">Request A Demo</button>
			<img className='homeImg' src="/home.png" alt="" />
			<div className="con">
				Trusted by the worlds bets team.
			</div>
			<img className='home2Img' src="/home2.png" alt="" />
			<HomeCard heading={"A nice and simple financial ovberview"} top={true} />
			<div className="voiletBox my-3">
				{voiletArray.map((val)=>(
					<Ticks val={val} col={"#9D0AFF"} />
				))}
			</div>
			<div className="voiletBox my-3">
				{greenArray.map((val)=>(
					<Ticks val={val} col={"#00F59B"} />
				))}
			</div>
			<br />
			<br />
			<div className='heading'>Supercharge your<br /> workflow to get started</div>
			<div className='content'>Lorem ipsum, dolor sit amet consectetur adipisi1
				cing elit. Illo eligendi fugiat odit, labore eaque ducimus ex velit commodi! Dolores eum recusandae, explicabo ex voluptatem praesentium.
			</div>
			<div className="allCards">
				{cardArray.map((crd)=>(
					<Card crd={crd} />
				))}
			</div>
		</div>
    )
}

export default Home