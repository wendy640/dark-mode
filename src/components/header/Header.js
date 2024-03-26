import "./Header.css";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ theme, toggleTheme,switchbtn }) => {
	return (
		<header data-theme={theme}>
			<div className="container --flex-between">
				<div className="logo">
					<img src={logo} alt="logo" width={170} />
				</div>
				<nav>
					<ul className="--flex-between">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
					</ul>
				</nav>

				<div onClick={toggleTheme}>
					<span className="toggle-btn">
						<FaMoon color="pink" size={16} />
						<FaSun color="yellow" size={16} />
						<div className={switchbtn ? "ball move": "ball"}></div>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
