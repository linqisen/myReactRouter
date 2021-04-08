import React from "react";
import { createBrowserHistory as createHistory } from "history";
import RouterContext from "./RouterContext";
class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = { path: "" };
        this.history = createHistory();
        console.log(this.history);
    }
    componentDidMount() {
        this.setState({ path: this.history.location.pathname });
        this.unListen = this.history.listen((e) => {
            console.log("history.listen", e);
            this.setState({ path: e.location.pathname });
        });
    }
    componentWillUnmount() {
        this.unListen();
    }

    render() {
        return (
            <RouterContext.Provider
                value={{ history: this.history, path: this.state.path }}
            >
                {this.props.children}
            </RouterContext.Provider>
        );
    }
}
export default Router;
