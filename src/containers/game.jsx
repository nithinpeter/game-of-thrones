import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PickCharacters from "./pick-characters";
import CharactersDropZone from "./characters-drop-zone";
import * as actions from "../store/actions";

class Game extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        actions.fetchGame(this.props.dispatch, 1);
    }

    render() {
        const { isFinished, isLoading } = this.props;

        return isFinished ? <div>Finished</div> : <div className="game-center">
            <CharactersDropZone />
            <PickCharacters />
        </div>
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {
        isFinished: state.game.isFinished,
        isLoading: state.game.isLoading,
    }
}

export default connect(mapStateToProps)(Game);

