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

        return <div className="control-center">
            <div className="control-center-content">
                {
                    currentLevel == 1 ? <h1>Start Playing</h1> : <h1 className="header">Level {currentLevel}</h1>
                }
                <button className="primary-button" onClick={this.handlePlay.bind(this)}>PLAY</button>
            </div>
        </div> 
    }

    handlePlay() {
        actions.fetchGame(this.props.dispatch, this.props.currentLevel);
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

