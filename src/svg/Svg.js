import BitcoinSvg from "./BitcoinSvg";
import BlockchainSvg from "./BlockchainSvg";
import "./Svg.css";

const Svg = (props) => {
	return props.class === "blockchain" ? <BlockchainSvg /> : <BitcoinSvg />;
};

export default Svg;
