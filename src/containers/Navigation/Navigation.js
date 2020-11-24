import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

class Navigation extends Component {
    state = { isShow: "hide" }

    toggleShow = () => {
        if (this.state.isShow === "hide") {
            this.setState({ isShow: "show"})
        } else if (this.state.isShow === "show") {
            this.setState({ isShow: "hide" })
        }
    }
    render() {
        return (
            <NavigationBar 
                isShow={this.state.isShow} 
                toggleShow={this.toggleShow} 
            />
        );
    }
}

export default Navigation;
