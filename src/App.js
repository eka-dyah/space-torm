import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Additional/Loading";

const MarsInSight = lazy(() => import("./containers/MarsInSight/MarsInSight"));
const SpaceNews = lazy(() => import("./containers/SpaceNews/SpaceNews"));
const Apod = lazy(() => import("./containers/Apod/Apod"));
const Welcome = lazy(() => import("./components/Welcome/Welcome"));

const path = [
	{ comp: Welcome, path: "/", exact: true },
	{ comp: SpaceNews, path: "/space-news", exact: false },
	{ comp: MarsInSight, path: "/mars-weather", exact: false },
	{ comp: Apod, path: "/apod", exact: false },
];



function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<Loading />}>
				<Switch>
					{path.map((link) => (
						<Route
							key={link.path}
							path={link.path}
							component={link.comp}
							exact={link.exact}
						/>
					))}
				</Switch>
				</Suspense>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
