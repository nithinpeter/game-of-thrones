import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class ControlCenter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoading, isFinished, currentLevel } = this.props;

        return !isLoading && <div className="control-center">
            <div className="control-center-content">
                <h1 className="header">Level {currentLevel}</h1>
                <button className="primary-button" onClick={this.handlePlay.bind(this)}>PLAY</button>
            </div>
        </div> 
    }

    handlePlay() {
        actions.playNextLevel(this.props.dispatch);
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {
        isLoading: state.game.isLoading,
        isFinished: state.game.isFinished,
        currentLevel: state.game.currentLevel,
    }
}

export default connect(mapStateToProps)(ControlCenter);

