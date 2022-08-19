import "./Hero.css";
import Svg from "../../svg/Svg";

const Hero = (props) => {
	return (
		<div className="hero">
			<div className="hero-content">
				<div className={`hero-heading ${props.colorClass}`}>
					{props.title}
				</div>
				<p className="hero-text">{props.description}</p>
				<button className={`hero-button ${props.colorClass}-button`}>
					<a href={props.href}>Learn more</a>
				</button>
			</div>
			<div className="hero-image">
				<Svg class={props.class} />
			</div>
		</div>
	);
};

export default Hero;
