import Navigation from "../containers/Navigation/Navigation";

const Layout = ({ children }) => (
	<>
		<Navigation />
		<div className="container-lg my-4">{children}</div>
	</>
);

export default Layout;
