import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import CharacterHolder from "../components/character-holder";
import CharacterConnector from "../components/character-connector";
import * as actions from "../store/actions";

class CharactersDropZone extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gameData, isLoading } = this.props;

        if(!isLoading) {
            const primaryCharacter = gameData.filter(character => character.isPrimary)[0];
            
            const renderCharacter = (id, isPrimary) => {
                const character = gameData[id];
                const relationships = character.relationships;

                return <div className="character-drop-zone-inner-container">

                    <div className="character-holder-connector">
                        <CharacterHolder isPrimary={isPrimary} 
                            gameData={gameData} 
                            id={id} 
                            droppedItemId={character.droppedItemId} 
                            key={"char_" + id} 
                            onDrop={this.onDrop.bind(this)}/>
                        
                        <div className="connector-container">
                            {
                                relationships && relationships.map((relationship, index) => {
                                    return <CharacterConnector 
                                                index={index} 
                                                relationship={relationship} 
                                                total={relationships ? relationships.length : 0}/>
                                })
                            }
                        </div>
                    </div>
                    
                    <div className={"secondary-container children-" + (relationships ? relationships.length : 0)}>
                        { relationships ?
                            character.relationships.map((item) => {
                                return renderCharacter(item.relatedTo)
                            }) : null
                        }
                    </div> 
                </div>
            }

            return <div className="character-drop-zone"> { renderCharacter(primaryCharacter.id, true) } </div>

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

export default connect(mapStateToProps)(CharactersDropZone);

