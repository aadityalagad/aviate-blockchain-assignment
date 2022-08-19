import "./Hero.css";
import Svg from "../../svg/Svg";

const Hero = (props) => {
	return (
		<div className="hero">
			<div className="hero-content">
				{/* hero heading */}
				<div className={`hero-heading ${props.colorClass}`}>
					{props.title}
				</div>
				{/* hero description */}
				<p className="hero-text">{props.description}</p>
				{/* hero button */}
				<button className={`hero-button ${props.colorClass}-button`}>
					<a href={props.href}>Learn more</a>
				</button>
			</div>
			{/* hero image */}
			<div className="hero-image">
				{/* renders respective svg */}
				<Svg class={props.class} />
			</div>
		</div>
	);
};

export default Hero;
