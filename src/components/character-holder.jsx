import React from "react";
import c from '../helpers/constants';
import { DropTarget } from 'react-dnd';

const characterTarget = {
  drop(props, monitor) {
      props.onDrop(monitor.getItem(), props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    data: monitor.getItem()
  };
}


const CharacterHolder = ({ isPrimary, id, gameData, droppedItemId = -1, connectDropTarget, isOver }) => {
    
    function renderer(droppedItemId, id, imageUrl?, name?) {
        
        if (droppedItemId == -1) {
            
            return <div>
                <img src={""} className="image-holder"/>        
            </div>

        } else if (droppedItemId == id) {
            
            const character = gameData[droppedItemId];

            return <div>
                <img src={character.imageUrl} className="image"/>
                <span className="name">{character.name}</span>        
            </div>

        } else {

            const character = gameData[droppedItemId];

            return <div>
                <img src={character.imageUrl} className="image"/>
                <span className="name">{character.name}</span>
                <span className="error">X</span>        
            </div>
        }
    }

    
    if (isPrimary){
        const character = gameData[id];

        return <div className="not-over character-holder-container">
            <div>
                <img src={character.imageUrl} className="image"/>
                <span className="name">{character.name}</span>        
            </div>
        </div>

    } else {
        
        return connectDropTarget( <div className={`${(isOver ? "is-over" : "not-over")} character-holder-container`}>
            { renderer(droppedItemId, id) }
        </div>);
    }
}

export default DropTarget(c.ItemTypes.CHARACTER, characterTarget, collect)(CharacterHolder);