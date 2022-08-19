import "./Header.css";
import logo from "./Images/menu.png";

const Header = () => {
	return (
		<nav className="header">
			<a href="#blockchain">Blockchain</a>
			<a href="#bitcoin">Bitcoin</a>
			<a href="#currency-exchange-calculator">
				Currency Exchange Calculator
			</a>
			<img className="hamburger" src={logo} alt="menu"></img>
		</nav>
	);
};

export default Header;
