import "./Hero.css";
import Svg from "./Svg";

const Hero = (props) => {
	return (
		<div className="hero">
			<div className="main-hero">
				<div className={`main-hero-heading ${props.colorClass}`}>
					{props.title}
				</div>
				<p className="main-hero-text">{props.description}</p>
				<button
					className={`main-hero-button ${props.colorClass}-button`}
				>
					<a href={props.href}>Learn more</a>
				</button>
			</div>
			<Svg class={props.class} />
		</div>
	);
};

export default Hero;
