import styles from "../app.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Game from "./game";
import Header from "./header";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={style.container}>
            <Header />
            <Game />
        </div> 
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {}
}

const style = {
    container: {
        height: "100vh",
    }
}

export default connect(mapStateToProps)(App);

