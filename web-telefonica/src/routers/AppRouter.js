import React from 'react'
import { Banner } from "../components/Banner";
import { Graphics } from "../components/Graphics";
import { TableGrid } from "../components/TableGrid";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <Banner />

            <Switch>
                <Route exact path="/graphics" component={Graphics} />
                <Route exact path="/"  component={TableGrid} />
            </Switch>
        </Router >
    )
}
