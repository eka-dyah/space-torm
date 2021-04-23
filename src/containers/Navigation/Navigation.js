import { Component } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

class Navigation extends Component {
    state = { isShow: "hidden" }

    toggleShow = () => {
        if (this.state.isShow === "hidden") {
            this.setState({ isShow: "show"})
        } else if (this.state.isShow === "show") {
            this.setState({ isShow: "hidden" })
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
