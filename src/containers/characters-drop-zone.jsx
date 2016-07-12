import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import CharacterHolder from "../components/character-holder";

class CharactersDropZone extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gameData, isLoading } = this.props;

        return !isLoading && <div>
            <div>
                {
                    gameData.characterTree.map((character, index) => {
                        return <CharacterHolder {...character} key={"char_" + index}/>
                    })
                }
            </div>
        </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        gameData: state.game.data,
        isLoading: state.game.isLoading,
    }
}

export default connect(mapStateToProps)(CharactersDropZone);

