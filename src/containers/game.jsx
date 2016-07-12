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
        return <div style={style.container}>
            <CharactersDropZone />
            <PickCharacters />
        </div>
    }

}

const mapStateToProps = (state, ownProps) => { 
    return {
        characters: state.game.characterTree
    }
}

const style = {
    container: {
        height: "90vh",
    }
}

export default connect(mapStateToProps)(Game);

