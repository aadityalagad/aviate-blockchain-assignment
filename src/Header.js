import "./Header.css";
import logo from "./Images/menu.png";

const Header = () => {
	return (
		<nav className="header sticky">
			<a href="#blockchain">About Blockchain</a>
			<a href="#bitcoin">About Bitcoin</a>
			<a href="#currency-exchange-calculator">
				Currency Exchange Calculator
			</a>
			<img className="menu-image" src={logo} alt="menu"></img>
		</nav>
	);
};

export default Header;
