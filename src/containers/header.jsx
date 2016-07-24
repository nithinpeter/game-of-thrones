import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header-container">
            <h4>GoT!</h4>
        </div> 
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {}
}

export default connect(mapStateToProps)(Header);

