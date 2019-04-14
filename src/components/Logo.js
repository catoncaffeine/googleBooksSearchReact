import React, {Component} from "react";
import logo from "../catoncaffeine.jpeg";

export default class Logo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rotate: false
        }
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.loading && this.props.loading) {
            this.setState({
               rotate: true
            });
            setTimeout(this.stopRotation, 1000);
        }

    }

    stopRotation = () => {
        this.setState({
            rotate: false
        });
        clearTimeout(this.stopRotation);
    };

    render() {
        return(
            <div className="logo">
                <img
                    className={this.state.rotate ? "animate" : ""}
                    src={logo}
                />
            </div>
        );
    }
}