import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "./pages";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={pages.HomePage} />
            </Switch>
        </Router>
    );
}
