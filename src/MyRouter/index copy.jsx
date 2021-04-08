import React from "react";
import Index from "./component/index";
import Home from "./component/home";
import Main from "./component/main";

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
            <div style={{ width: "800px", margin: "200px auto 0" }}>
                <ul
                    style={{
                        listStyleType: "none",
                        padding: "0",
                        display: "flex",
                        // justifyContent:'space-around'
                    }}
                >
                    <a href="/index" style={{ width: "100px" }}>
                        index
                    </a>
                    <a href="/home" style={{ width: "100px" }}>
                        home
                    </a>
                    <a href="/main" style={{ width: "100px" }}>
                        main
                    </a>
                </ul>
                <div>
                    {path === "/index" ? <Index /> : null}
                    {path === "/home" ? <Home /> : null}
                    {path === "/main" ? <Main /> : null}
                </div>
            </div>
        );
    }
}
export default MyRouterDemo;
