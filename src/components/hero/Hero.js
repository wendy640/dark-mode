import React from "react";
import HeroImg from "../../assets/phone.svg";
import "./Hero.css";
const Hero = ({ theme, toggleTheme }) => {
	return (
		<section data-theme={theme} className="hero">
			<div className="container --grid-15">
				<div className="hero-text">
					<h1>Visit Villa Shop Landing Page.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
						perferendis eveniet animi in, voluptas cumque iste eius recusandae
						illo incidunt?
					</p>
					<div
						className="--flex-start
          "
					>
						<button className="--btn btn-p">Learn More</button>
						<button className="--btn --btn-danger">Sign Up</button>
					</div>
				</div>
				<div className="--text-center">
					<img src={HeroImg} alt="phone" width={200} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
