import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

const MarsInSight = React.lazy(() => import("./containers/MarsInSight/MarsInSight"));
const SpaceNews = React.lazy(() => import("./containers/SpaceNews/SpaceNews"));
const Apod = React.lazy(() => import("./containers/Apod/Apod"));
const Welcome = React.lazy(() => import("./components/Welcome/Welcome"));

const path = [
	{ comp: SpaceNews, path: "/space-news" },
	{ comp: MarsInSight, path: "/mars-weather" },
	{ comp: Apod, path: "/apod" },
];

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path="/" exact>
						<Welcome />
					</Route>
					{path.map((link) => (
						<Route
							key={link.path}
							path={link.path}
							component={link.comp}
						/>
					))}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
