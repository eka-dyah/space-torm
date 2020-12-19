import Error from "../Additional/Error";
import Loading from "../Additional/Loading";
import Modals from "../Additional/Modals";

import "./MarsInSight.css";
import WeatherDetailsTable from "./WeatherDetailsTable";

const MarsInSightComp = ({
	toggleModal,
	isOpen,
	weatherData = null,
	isLoading = false,
	error = null,
}) => {
	let render;
	if (isLoading) {
		render = <Loading />;
	} else if (error) {
		render = <Error />;
	} else if (weatherData) {
		render = (
			<>
				<button
					onClick={toggleModal}
					className="MI-button btn btn-primary mt-2"
				>
					Weather Details
				</button>
				<Modals
					isOpen={isOpen}
					toggleModal={toggleModal}
					header="Daily Weather Report"
				>
					<WeatherDetailsTable weatherData={weatherData} />
				</Modals>
			</>
		);
	} else {
		render = <div></div>;
	}

	return (
		<div className="mb-5">
			<div className="frame-container text-center">
				<iframe
					src="https://mars.nasa.gov/layout/embed/image/insightweather/"
					height={530}
					title="Elysium Planitia"
				></iframe>
			</div>
			{render}
		</div>
	);
};

export default MarsInSightComp;
