import BlockchainSvg from "./BlockchainSvg";
import "./Hero.css";

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="main-hero">
                <div className="main-hero-heading">{props.heading}</div>
                <p className="main-hero-text">{props.description}</p>
                <button className="main-hero-button">Learn more</button>
            </div>
            <BlockchainSvg />
        </div>
    );
};

export default Hero;
