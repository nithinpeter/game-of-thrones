import React from "react";
import c from '../helpers/constants';
import { DropTarget } from 'react-dnd';
import Character from "./character";

const pickCharactersTarget = {
  drop(props, monitor) {
      props.onDropBack(monitor.getItem());
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    data: monitor.getItem()
  };
}

const PickCharactersTarget = ({ 
        gameData,
        connectDropTarget, 
        isDragging,
      }) => {

    return connectDropTarget(<div className="pick-character-container">
            {
                gameData.map((character, index) => {
                    return <Character {...character} key={"char_" + index}/>
                })
            }
        </div>)
}

export default DropTarget(c.ItemTypes.CHARACTER, pickCharactersTarget, collect)(PickCharactersTarget);