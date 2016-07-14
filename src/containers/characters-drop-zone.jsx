import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import CharacterHolder from "../components/character-holder";
import * as actions from "../store/actions";

class CharactersDropZone extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gameData, isLoading } = this.props;
        console.log(gameData);
        return !isLoading && <div>
            <div>
                {
                    gameData.map((character, index) => {
                        return <CharacterHolder {...character} key={"char_" + index} onDrop={this.onDrop.bind(this)}/>
                    })
                }
            </div>
        </div>
    }

    onDrop(droppedItem, id) {
        console.log(droppedItem, id);
        actions.itemDropped(this.props.dispatch, droppedItem.id, id);
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        gameData: state.game.characterHolderTree,
        isLoading: state.game.isLoading,
    }
}

export default connect(mapStateToProps)(CharactersDropZone);

