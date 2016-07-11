import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hey {this.props.name}!</h1>
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {
        name: state.app.name
    }
}

export default connect(mapStateToProps)(App);

