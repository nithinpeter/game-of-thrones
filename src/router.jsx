import React from "react";
import { Router, Route, browserHistory } from 'react-router'
import App from "./containers/app";

const router = <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>

export default router;