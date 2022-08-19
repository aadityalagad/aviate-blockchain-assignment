import "./App.css";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import BlockchainData from "./Blockchain.json";
import BitcoinData from "./Bitcoin.json";

function App() {
	return (
		<div className="app">
			<Header />
			<Main
				class="blockchain"
				id="blockchain"
				title="Blockchain"
				description="A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. 
				As a database, a blockchain stores information electronically in digital format."
				colorClass="blue"
			/>
			<About id="about-blockchain" data={BlockchainData} />

			<Main
				class="bitcoin"
				id="bitcoin"
				title="Bitcoin"
				description="Bitcoin is a cryptocurrency, a virtual currency designed to act as money and 
				a form of payment outside the control of any one person, group, or entity, 
				and thus removing the need for third-party involvement in financial transactions."
				colorClass="yellow"
			/>
			<About id="about-bitcoin" data={BitcoinData} />
		</div>
	);
}

export default App;
