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


const CharacterHolder = ({ imageUrl, name, id, droppedItemId, connectDropTarget, isOver }) => {
    console.log(droppedItemId, id)
    return connectDropTarget(
        <div style={Object.assign({}, style.containerStyle, (isOver ? style.dragOverStyle : {}))}>
            {droppedItemId == id ? <div>
                <img src={imageUrl} alt={name} style={style.imageStyle}/>
                <span>{name}</span>        
            </div> : <div>
                <img src={""} alt={"Drop here"} style={style.imageStyle}/>
                <span>That was wrong</span>        
            </div>}
        </div>
    )
}

const style = {
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dragOverStyle: {
        background: "pink",
    },
    imageStyle: {
        borderRadius: "50%",
        width: 40,
        height: 40,
    }
}

export default DropTarget(c.ItemTypes.CHARACTER, characterTarget, collect)(CharacterHolder);