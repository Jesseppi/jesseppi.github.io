import * as React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResumePage from "./pages/resume";

class Application extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact={true} >
                        <ResumePage />
                    </Route>
                </div>
            </Router>
        );
    }
}

render(<Application />, document.getElementById("root"));
