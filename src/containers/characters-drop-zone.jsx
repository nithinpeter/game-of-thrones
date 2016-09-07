import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import CharacterHolder from "../components/character-holder";
import CharacterConnector from "../components/character-connector";
import Loader from "../components/loader";
import * as actions from "../store/actions";

export class CharactersDropZone extends Component {
    constructor(props) {
        super(props);
    }


    renderCharacter(id, isPrimary) {
        const gameData = this.props.gameData;
        const character = gameData[id];
        const relationships = character.relationships;

        return <div className="character-drop-zone-inner-container" key={"character_"+id}>

            <div className="character-holder-connector">
                <CharacterHolder isPrimary={isPrimary}
                    gameData={gameData}
                    id={id}
                    droppedItemId={character.droppedItemId}
                    key={"char_" + id}
                    onDrop={this.onDrop.bind(this) }/>

                <div className="connector-container">
                    {
                        relationships && relationships.map((relationship, index) => {
                            return <CharacterConnector
                                key={"connector_" + relationship.id}
                                index={index}
                                relationship={relationship}
                                total={relationships ? relationships.length : 0}/>
                        })
                    }
                </div>
            </div>

            <div className={"secondary-container children-" + (relationships ? relationships.length : 0) }>
                { relationships ?
                    relationships.map((item) => {
                        return this.renderCharacter(item.relatedTo, false)
                    }) : null
                }
            </div>
        </div>
    }

    render() {
        const { gameData, isLoading, isFinished } = this.props;
        
        if (!isLoading) {
            const primaryCharacter = gameData.filter(character => character.isPrimary)[0];

            return <div className="character-drop-zone"> { this.renderCharacter(primaryCharacter.id, true) } </div>

        } else {
            return !isFinished && <Loader />
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
        isFinished: state.game.isFinished,
    }
}

export default connect(mapStateToProps)(CharactersDropZone);

