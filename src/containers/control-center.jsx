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

        const isLastLevel = currentLevel > 2;

        return <div className="control-center">
            <div className="control-center-content">
                {
                    currentLevel == 1 ? <div>
                        <h1 className="header">Start Playing</h1>
                    </div> : <div>
                        { isLastLevel ? <h1 className="header">Congrats! You Won!</h1> : <h1 className="header">Play Next Level!</h1> }
                    </div>
                }
                { !isLastLevel && <button className="primary-button" onClick={this.handlePlay.bind(this)}>PLAY</button> }
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

