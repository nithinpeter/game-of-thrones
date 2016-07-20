import React from "react";
import c from '../helpers/constants';
import { DropTarget, DragSource } from 'react-dnd';
import _ from "lodash";

const characterTarget = {
  drop(props, monitor) {
      props.onDrop(monitor.getItem(), props.id);
  }
};

const characterSource = {
  beginDrag(props) {
    return {
        id: props.id
    };
  }
};

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    data: monitor.getItem()
  };
}

function sourceCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


const CharacterHolder = ({ 
        isPrimary, 
        id, 
        gameData, 
        droppedItemId = -1, 
        connectDropTarget, 
        isOver,
        connectDragSource, 
    }) => {
    
    function renderer(droppedItemId, id) {
        
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
        
        return connectDragSource(connectDropTarget( <div className={`${(isOver ? "is-over" : "not-over")} character-holder-container`}>
            { renderer(droppedItemId, id) }
        </div>));
    }
}

export default _.flow(DropTarget(c.ItemTypes.CHARACTER, characterTarget, targetCollect),
                DragSource(c.ItemTypes.CHARACTER, characterSource, sourceCollect))(CharacterHolder);