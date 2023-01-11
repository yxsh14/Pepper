import logo from './logo.svg';
import './App.css';
import "./styles/general.css"
import Home from './components/Home';
import About from './components/About';
import Ratings from './components/Ratings';
import Career from './components/Career';
import HomeCard from './minors/HomeCard';
import { Footer } from './components/Footer';
import NavScrollExample from './components/NavScrollExample';


function App() {
	return (
		<div>
			<NavScrollExample />
			<div id='mainBox'>
				<Home />
				<About />
				<Ratings />
				<Career />
				<HomeCard heading={"Focus on the analytics that matters"} top={false} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
