const Error = ({ errorMessage = null }) => (
	<div className="col-12 text-center">
		{errorMessage ? (
			<p>{errorMessage}</p>
		) : (
			<p>Something wrong, reload the page or try again later</p>
		)}
	</div>
);

export default Error;
