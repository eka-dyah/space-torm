import NewsTile from "./NewsTile";

const NewsLists = ({ newsData = null, prevButton, nextButton }) => {
	if (!newsData) {
		return <p className="col-12 text-center">Something wrong, try again later</p>;
	}
	if (newsData.docs.length === 0) {
		return <p className="col-12 text-center">Not Found</p>;
	}
	return (
		<>
			{newsData.docs.map(
				({
					_id,
					published_date,
					title,
					url,
					featured_image,
					news_site_long,
				}) => (
					<NewsTile
						key={_id}
						published_date={published_date}
						title={title}
						url={url}
						featured_image={featured_image}
						news_site={news_site_long}
					/>
				)
			)}
			<div className="col-12 text-center mt-4">
				<button
					className="btn btn-secondary"
					disabled={!newsData.hasPrevPage}
					onClick={prevButton}
				>
					<i
						className="fa fa-arrow-circle-left"
						aria-hidden="true"
					></i>
				</button>{" "}
				<button
					className="btn btn-secondary"
					disabled={!newsData.hasNextPage}
					onClick={nextButton}
				>
					<i
						className="fa fa-arrow-circle-right"
						aria-hidden="true"
					></i>
				</button>
			</div>
		</>
	);
};

export default NewsLists;
