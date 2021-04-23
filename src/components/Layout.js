import Navigation from "../containers/Navigation/Navigation";

const Layout = ({ children }) => (
	<>
		<Navigation />
		<div className="container-lg mt-4 pb-3">{children}</div>
	</>
);

export default Layout;
