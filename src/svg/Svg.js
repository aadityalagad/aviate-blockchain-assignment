import BitcoinSvg from "./BitcoinSvg";
import BlockchainSvg from "./BlockchainSvg";
import "./Svg.css";

const Svg = (props) => {
	// renders one of the two svg components
	// the component is not scalable yet
	return props.class === "blockchain" ? <BlockchainSvg /> : <BitcoinSvg />;
};

export default Svg;
