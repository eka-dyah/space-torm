import React from "react";
import { Link } from "react-router-dom";
import navlinks from "../../Links/navlinks.json";

const Welcome = () => (
	<div className="container-lg mt-5">
		<h1 className="logo text-center">Space Torm</h1>
		<hr />
		<div className="row my-5 justify-content-center">
			{navlinks.map((na) => (
				<div className="col-12 col-sm-6" key={na.name}>
					<Link to={na.link}>
						<div
							className="my-2 my-sm-3 py-5"
							style={{ backgroundColor: na.bgColor }}
						>
							<h2
								className="title text-center"
								style={{ color: na.color }}
							>
								{na.name}
							</h2>
						</div>
					</Link>
				</div>
			))}
		</div>
	</div>
);

export default Welcome;
