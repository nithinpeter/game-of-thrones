import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={style.container} className="header-container">
            <h4>GoT!</h4>
        </div> 
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {}
}

const style = {
    container: {
        height: "10vh",
    }
}

export default connect(mapStateToProps)(Header);

