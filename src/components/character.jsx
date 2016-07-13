import React from "react";
import c from "../helpers/constants";
import { DragSource } from 'react-dnd';

const characterSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Character = ({ imageUrl, name, id, connectDragSource, isDragging }) => {

    return connectDragSource(<div style={style.containerStyle}>
        <img src={imageUrl} alt={name} style={style.imageStyle}/>
        <span style={{ color: (isDragging ? "red" : "green") }}>{name}</span>        
    </div>)
}

const style = {
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
    },
    imageStyle: {
        borderRadius: "50%",
        width: 40,
        height: 40,
    }
}

export default DragSource(c.ItemTypes.CHARACTER, characterSource, collect)(Character);