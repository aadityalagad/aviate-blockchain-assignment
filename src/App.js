import "./App.css";
import Body from "./Components/Main/Body";
import CalculatorApp from "./Components/Calculator/CalculatorApp";
import Header from "./Components/Main/Header";

function App() {
	return (
		<div className="app">
			<Header />
			<Body />
			<CalculatorApp />
		</div>
	);
}

export default App;
