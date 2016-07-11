import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import router from "./router";

const appToRender = <Provider store={store}>
    {router}
</Provider>


ReactDOM.render(appToRender, document.body);

