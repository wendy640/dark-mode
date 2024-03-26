import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
	const [switchbtn, setSwitchbtn] = useState(false);
	const [theme, setTheme] = useLocalStorage("theme", "light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setSwitchbtn(!switchbtn);
	};
	useEffect(()=>{
		if(theme === "dark"){
			setSwitchbtn(true)
		}
	},[theme])
	return (
		<div className="main">
			<Header theme={theme} toggleTheme={toggleTheme} switchbtn={switchbtn} />
			<Hero theme={theme} toggleTheme={toggleTheme} />
			<Footer theme={theme} toggle={toggleTheme} />
		</div>
	);
}

export default App;
