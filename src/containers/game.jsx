import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PickCharacters from "./pick-characters";
import CharactersDropZone from "./characters-drop-zone";
import ControlCenter from "./control-center";
import * as actions from "../store/actions";

export class Game extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // actions.fetchGame(this.props.dispatch, this.props.currentLevel);
    }

    render() {
        const { isLoading, isFinished } = this.props;

        return <div className="game-center">
            <CharactersDropZone />
            <PickCharacters />

            { isFinished && <ControlCenter /> }
        </div>
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {
        isFinished: state.game.isFinished,
        isLoading: state.game.isLoading,
        currentLevel: state.game.currentLevel,
    }
}

export default connect(mapStateToProps)(Game);

