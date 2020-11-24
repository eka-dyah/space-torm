import React, { Component, createRef } from "react";

import SpaceNewsLayout from "../../components/SpaceNews/SpaceNewsLayout";

class SpaceNews extends Component {
	state = {
		newsData: null,
		isLoading: false,
		error: null,
		page: 1,
	};

	newsInput = createRef();

	fetchingNewsData = (inputSearch = null, page = this.state.page) => {
		this.setState({ isLoading: true });
		if (inputSearch === "" || !inputSearch) {
			fetch(
				`https://spaceflightnewsapi.net/api/v1/articles?limit=12&page=${page}`
			)
				.then((res) => res.json())
				.then((data) => {
					this.setState({
						newsData: data,
						isLoading: false,
						error: null,
					});
				})
				.catch((error) => this.setState({ error }));
		} else {
			fetch(
				`https://spaceflightnewsapi.net/api/v1/articles?limit=12&page=${page}&search=${inputSearch}`
			)
				.then((res) => res.json())
				.then((data) => {
					this.setState({
						newsData: data,
						isLoading: false,
						error: null,
					});
				})
				.catch((error) => this.setState({ error }));
		}
	};

	componentDidMount() {
		this.fetchingNewsData();
	}

	nextNewsButton = () => {
		if (this.state.newsData.hasNextPage) {
			this.fetchingNewsData(this.state.page + 1);
			this.setState((state) => ({ page: state.page + 1 }));
		}
	};

	prevNewsButton = () => {
		if (this.state.newsData.hasPrevPage) {
			this.fetchingNewsData(this.state.page - 1);
			this.setState((state) => ({ page: state.page - 1 }));
		}
	};

	newsSearchSubmit = (e) => {
		e.preventDefault();
		const searchInput = this.newsInput.current.value;
		this.fetchingNewsData(searchInput, this.state.page);
	}

	render() {
		return (
			<SpaceNewsLayout
				newsData={this.state.newsData}
				nextButton={this.nextNewsButton}
				prevButton={this.prevNewsButton}
				newsSearchInput={this.newsInput}
				newsSearchSubmit={this.newsSearchSubmit}
				isLoading={this.state.isLoading}
				error={this.state.error}
			/>
		);
	}
}

export default SpaceNews;
