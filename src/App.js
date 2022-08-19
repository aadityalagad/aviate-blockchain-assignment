import "./App.css";
import Body from "./Components/Body";
import CalculatorApp from "./Components/CalculatorApp";
import Header from "./Components/Header";

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
