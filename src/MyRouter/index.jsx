import React from "react";
import Index from "./component/index";
import Home from "./component/home";
import Main from "./component/main";

import Router from "./Router";
import Route from "./Route";
import Link from "./Link";

class MyRouterDemo extends React.Component {
    state = {
        path: "",
    };
    componentDidMount() {
        const { pathname } = window.location;
        if (pathname !== "/") {
            this.setState({ path: pathname });
        }
    }
    render() {
        const { path } = this.state;
        return (
            <Router>
                <div style={{ width: "800px", margin: "200px auto 0" }}>
                    <ul
                        style={{
                            listStyleType: "none",
                            padding: "0",
                            display: "flex",
                            // justifyContent:'space-around'
                        }}
                    >
                        <Link to="/index" style={{ width: "100px" }}>
                            index
                        </Link>
                        <Link to="/home" style={{ width: "100px" }}>
                            home
                        </Link>
                        <Link to="/main" style={{ width: "100px" }}>
                            main
                        </Link>
                    </ul>
                    <div>
                        {/* {path === "/index" ? <Index /> : null}
                        {path === "/home" ? <Home /> : null}
                        {path === "/main" ? <Main /> : null} */}
                        <Route path="/index" children={<Index />} />
                        <Route path="/home" children={<Home />} />
                        <Route path="/main" children={<Main />} />
                    </div>
                </div>
            </Router>
        );
    }
}
export default MyRouterDemo;
