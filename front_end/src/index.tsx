import * as React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Loadable from "react-loadable";

const LoadableHomePage = Loadable({
    loader: () => import("./pages/home"),
    loading() {
        return (<div>Loading...</div>);
    }

});

class Application extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact={true} component={LoadableHomePage} />
            </Router>
        );
    }
}

render(<Application />, document.getElementById("root"));
