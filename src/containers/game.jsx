import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PickCharacters from "./pick-characters";
import * as actions from "../store/actions";

class Game extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        actions.fetchGame(this.props.dispatch, 1);
    }

    render() {
        return <div>
            <h3>Game</h3>
            <PickCharacters />
        </div>
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {
        characters: state.game.characterTree
    }
}

export default connect(mapStateToProps)(Game);

