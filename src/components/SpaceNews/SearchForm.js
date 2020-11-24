import React from "react";

import { Input } from "reactstrap";

const SearchForm = ({ newsSearchSubmit, newsSearchInput }) => (
	<div className="container-lg mb-5">
		<form className="row" onSubmit={newsSearchSubmit}>
			<Input
				className="col-12 col-md-10"
				type="text"
				defaultValue=""
				placeholder="News Search"
				innerRef={newsSearchInput}
			/>
			<div className="d-md-none" style={{ height: 50 }}></div>
			<button className="btn btn-primary col-4 col-md-2">
				<i className="fa fa-search" aria-hidden="true"></i> Search
			</button>
		</form>
	</div>
);
export default SearchForm;
