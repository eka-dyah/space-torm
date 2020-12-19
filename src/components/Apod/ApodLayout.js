import { Fragment } from "react";
import Error from "../Additional/Error";
import Loading from "../Additional/Loading";

const ApodLayout = ({ data = null, isLoading = false, error = null }) => {
	let renderContent = null;
	if (isLoading) {
		renderContent = <Loading />;
	} else if (error) {
		renderContent = <Error />;
	} else if (data) {
		if (data.code === 404) {
			renderContent = (
				<div>
					<p className="text-center">Sorry, {data.msg}</p>
				</div>
			);
		} else {
			renderContent = (
				<div className="row align-items-center">
					<div className="col-12 col-md-6 mb-5">
						<h3 className="text-center">{data.title}</h3>
						<p className="text-right">{data.date}</p>
						<p className="text-justify">{data.explanation}</p>
						{data.copyright ? <p>Copyright: {data.copyright}</p>: null}
					</div>
					<div className="col-12 col-md-6">
						<a href={data.hdurl} target="_blank" rel="noopener noreferrer">
							<img
								src={data.url}
								alt={data.title}
								width="100%"
								className="mb-5"
							/>
						</a>
					</div>
				</div>
			);
		}
	}
	return (
		<Fragment>
			<h2 className="title py-4 text-center">
				Astronomy Picture of The Day
			</h2>
			<hr className="mb-5 " />
			{renderContent}
		</Fragment>
	);
};

export default ApodLayout;
