import React from "react";
import RouterContext from "./RouterContext";

class Route extends React.Component {
    render() {
        return (
            <RouterContext.Consumer>
                {(value) => {
                    console.log("route-value", value);
                    const { path, history } = value;
                    // return <div>1111</div>;
                    if (path === this.props.path) {
                        return this.props.children;
                    }
                    return null;
                }}
            </RouterContext.Consumer>
        );
    }
}
export default Route;
