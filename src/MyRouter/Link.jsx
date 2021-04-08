import React from "react";
import RouterContext from "./RouterContext";

class Link extends React.Component {
    render() {
        const { to, children, ...others } = this.props;
        return (
            <RouterContext.Consumer>
                {(value) => {
                    const { history } = value;

                    return (
                        <li
                            {...others}
                            onClick={() => {
                                history.push(to, {});
                            }}
                        >
                            {children}
                        </li>
                    );
                }}
            </RouterContext.Consumer>
        );
    }
}
export default Link;
