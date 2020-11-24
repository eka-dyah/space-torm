import React from "react";
import Navigation from "../containers/Navigation/Navigation";

const Layout = ({ children }) => (
	<React.Fragment>
		<Navigation />
		<div className="container-lg my-4">{children}</div>
	</React.Fragment>
);

export default Layout;
