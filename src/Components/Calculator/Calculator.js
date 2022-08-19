import { useEffect, useState } from "react";
import "./Calculator.css";
import Input from "./Input";
import Output from "./Output";
import listOfCurrency from "../../api/ListOfCurrency.json";

const Calculator = () => {
	// State for input value
	const [value, setValue] = useState(0);
	const [result, setResult] = useState(0);
	const [currency, setCurrency] = useState("INR");

	// Function to set value of input field
	const handleValue = (value) => {
		setValue(value);
	};

	// Function to set currency of input field
	const handleCurrency = (currency) => {
		setCurrency(currency);
	};

	// fetch data from api and set result
	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			`https://blockchain.info/tobtc?currency=${currency}&value=${
				value ? value : 0
			}`,
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => setResult(result))
			.catch((error) => console.log("error", error));
	}, [value, currency]);

	return (
		<div className="calculator">
			{/* Input component for input value and currency */}
			<Input
				currency={currency}
				listOfCurrency={listOfCurrency}
				setCurrencyHandler={handleCurrency}
				setValueHandler={handleValue}
			/>
			{/* Output component for displaying result */}
			<Output value={result} />
		</div>
	);
};

export default Calculator;
