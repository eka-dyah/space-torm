import Error from "../Additional/Error";
import Loading from "../Additional/Loading";
import NewsLists from "./NewsLists";
import SearchForm from "./SearchForm";

const SpaceNewsLayout = ({
	newsData = null,
	isLoading, 
	error,
	nextButton,
	prevButton,
	newsSearchSubmit,
	newsSearchInput,
}) => {
	let renderNews = null;
	if (isLoading) {
		renderNews = <Loading />
	} else if (error) {
		renderNews = <Error />
	} else if (newsData !== null) {
		renderNews = <NewsLists newsData={newsData} prevButton={prevButton} nextButton={nextButton} />
	}
	return (
		<div className="row mb-5">
			<div className="col-12">
				<div className="col-12 pl-0">
					<SearchForm
						newsSearchInput={newsSearchInput}
						newsSearchSubmit={newsSearchSubmit}
					/>
				</div>
			</div>
			<div className="row col-12">
				{renderNews}
			</div>
		</div>
	);
};

export default SpaceNewsLayout;
