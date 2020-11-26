import React, { Component } from "react";
import MarsInSightComp from "../../components/MarsInSight/MarsInSight";

class MarsInSight extends Component {
	state = {
		isOpen: false,
		isLoading: false,
		error: null,
		data: null,
	};

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch(process.env.REACT_APP_BACKEND_URL + "/mars-weather")
			.then((res) => {
				this.setState({ isLoading: false });
				return res.json();
			})
			.then((res) => {
				this.setState({ data: res });
			})
			.catch((err) => this.setState({ error: err, isLoading: false }));
	}

	toggleModal = () => {
		this.setState((state) => ({
			isOpen: !state.isOpen,
		}));
	};

	render() {
		return (
			<MarsInSightComp
				isOpen={this.state.isOpen}
				toggleModal={this.toggleModal}
				weatherData={this.state.data}
			/>
		);
	}
}

export default MarsInSight;
