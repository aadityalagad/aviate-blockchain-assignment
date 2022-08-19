import BlockchainData from "./Blockchain.json";
import BitcoinData from "./Bitcoin.json";
import Page from "./Page";

const Body = () => {
	return (
		<>
			<Page
				class="blockchain"
				id="blockchain"
				title="Blockchain"
				description="A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. 
				As a database, a blockchain stores information electronically in digital format."
				colorClass="blue"
				aboutId="about-blockchain"
				data={BlockchainData}
			/>
			<Page
				class="bitcoin"
				id="bitcoin"
				title="Bitcoin"
				description="Bitcoin is a cryptocurrency, a virtual currency designed to act as money and 
				a form of payment outside the control of any one person, group, or entity, 
				and thus removing the need for third-party involvement in financial transactions."
				colorClass="yellow"
				aboutId="about-bitcoin"
				data={BitcoinData}
			/>
		</>
	);
};

export default Body;
