import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import login from "./login.js";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            // <Router history={history}>
            //     <Switch>
            //         <Route path="/login" component={login} />
            //     </Switch>
            // </Router>
        )
    }
}