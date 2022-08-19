import Calculator from "./Calculator";
import "./CalculatorApp.css";

const CalculatorApp = () => {
	return (
		<div id="currency-exchange-calculator" className="calculator-app">
			<h1 className="calculator-app-heading">
				Currency Exchange Calculator
			</h1>
			<h2 className="calculator-app-description">
				Convert x value in the provided currency to btc
			</h2>
			{/* Calculator component for implementing currency exchange calculator */}
			<Calculator />
		</div>
	);
};

export default CalculatorApp;
