import "./App.css";
import Body from "./Components/Main/Body";
import CalculatorApp from "./Components/Calculator/CalculatorApp";
import Header from "./Components/Main/Header";

function App() {
	return (
		<div className="app">
			{/* Header component for navigation */}
			<Header />
			{/* Body component contains all the component for rendering information about blockchain and bitcoin */}
			<Body />
			{/* CalculatorApp component for implementing currency exchange calculator */}
			<CalculatorApp />
		</div>
	);
}

export default App;
