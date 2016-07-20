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

        if(!isLoading) {
            const primaryCharacter = gameData.filter(character => character.isPrimary)[0];
            const primaryCharacterId = primaryCharacter.id;

            const renderCharacter = (id, isPrimary) => {
                const character = gameData[id];
                const relationships = character.relationships;

                return <div>
                    <CharacterHolder isPrimary={isPrimary} gameData={gameData} id={id} droppedItemId={character.droppedItemId} key={"char_" + id} onDrop={this.onDrop.bind(this)}/>
                    <div style={style.secondaryContainer}>
                        { relationships ?
                            character.relationships.map((item) => {
                                return renderCharacter(item.relatedTo)
                            }) : null
                        }
                    </div> 
                </div>
            }

            return <div className="character-drop-zone"> { renderCharacter(primaryCharacterId, true) } </div>

        } else {
            return <div>
                Loading..
            </div>
        }

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

const style = {
    secondaryContainer: {
        display: "flex",
        justifyContent: "center"
    }
}

export default connect(mapStateToProps)(CharactersDropZone);

