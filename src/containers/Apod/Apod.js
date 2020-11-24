import React, { Component } from "react";
import ApodLayout from "../../components/Apod/ApodLayout";

class Apod extends Component {
	state = { data: null, isLoading: false, error: null };

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch('https://api.nasa.gov/planetary/apod?api_key=qE49VhkhKy5lprJVMMw2lrUpJjns4mOnZfMVpqij')
		.then(res => res.json())
		.then(result => {
			this.setState({
				data: result,
				isLoading: false,
				error: null
			})
		})
		.catch(error => this.setState({ error }))
	}

	render() {
		return (
			<ApodLayout
				data={this.state.data}
				error={this.state.error}
				isLoading={this.state.isLoading}
			/>
		);
	}
}

export default Apod;
