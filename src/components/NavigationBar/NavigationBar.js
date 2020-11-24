import React from "react";
import { Link } from "react-router-dom";
import navlinks from "../../Links/navlinks.json";

import "./NavigationBar.css";

const NavigationBar = ({ isShow, toggleShow }) => {
	return (
		<nav>
			<div className="container-lg d-sm-flex align-items-center justify-content-between">
				<div className="nav-logo">
					<div className="row m-0">
						<div
							className="burger-icon d-sm-none"
							onClick={toggleShow}
						>
							<i className="fa fa-bars" aria-hidden="true"></i>
						</div>
						<div className="ml-4 logo">
							<a href="/">Space Torm</a>
						</div>
					</div>
				</div>
				<div className={["nav-links", isShow].join(" ")}>
					{navlinks.map((na) => (
						<Link key={na.name} to={na.link} onClick={toggleShow}>
							{na.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
