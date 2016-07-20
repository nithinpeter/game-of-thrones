import React from "react";
import c from "../helpers/constants";
import { DragSource } from 'react-dnd';

const characterSource = {
  beginDrag(props) {
    return {
        id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Character = ({ 
        imageUrl, 
        name, 
        id, 
        isDropped, 
        isPrimary, 
        connectDragSource, 
        isDragging,
      }) => {

    return !isDropped && !isPrimary && connectDragSource(<div className={`${(isDragging ? "dragging" : "stationary")} character-container`}>
        <img src={imageUrl} alt={name} className="image"/>
        <span className="name">{name}</span>        
    </div>)
}

export default DragSource(c.ItemTypes.CHARACTER, characterSource, collect)(Character);