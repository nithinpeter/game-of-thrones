import appStyle from "../styles/app.styl";
import coreStyle from "../styles/core.styl";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Game from "./game";
import Header from "./header";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={style.container} className="app-container">
            <Header />
            <Game />
        </div> 
    }

}

const style = {
    container: {
        height: "100vh",
    }
}

export default DragDropContext(HTML5Backend)(App);

