import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "./pages";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/create" component={pages.CreatePage} />
                    <Route path="/" component={pages.HomePage} />
                </Switch>
            </Router>
        );
    }
}
