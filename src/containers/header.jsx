import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header-container">
            <img className="logo" src="/assets/images/got-logo.png" alt=""/>
        </div> 
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {}
}

export default connect(mapStateToProps)(Header);

