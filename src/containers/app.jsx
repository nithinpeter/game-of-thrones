import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Game from "./game";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>GoT!</h1>
            <Game />
        </div> 
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {}
}

export default connect(mapStateToProps)(App);

