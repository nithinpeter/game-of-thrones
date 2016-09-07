import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PickCharactersTarget from "../components/pick-characters-target";
import * as actions from "../store/actions";

// @DropTarget(c.ItemTypes.CHARACTER, pickCharactersTarget, collect)
export class PickCharacters extends Component {
    constructor(props) {
        super(props);
    }

    onDropBack(item) {
        console.log(item);
        actions.itemDroppedBack(this.props.dispatch, item.id);
    }

    render() {
        const { gameData, isLoading } = this.props;
        
        return (!isLoading && <PickCharactersTarget gameData={gameData} onDropBack={this.onDropBack.bind(this)}/>);
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        gameData: state.game.characterTree,
        isLoading: state.game.isLoading,
    }
}

export default connect(mapStateToProps)(PickCharacters);

