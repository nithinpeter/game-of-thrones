import React from "react";
import c from '../helpers/constants';
import { DropTarget } from 'react-dnd';

const characterTarget = {
  drop(props) {
      return { success: true }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


const CharacterHolder = ({ imageUrl, name, id, connectDropTarget, isOver, success }) => {
    console.log(isOver)
    return connectDropTarget(
        <div style={style.containerStyle}>
            <img src={""} alt={"Drop here"} style={style.imageStyle}/>        
        </div>
    )
}

const style = {
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        width: 100,
    },
    imageStyle: {
        borderRadius: "50%",
        width: 40,
        height: 40,
    }
}

export default DropTarget(c.ItemTypes.CHARACTER, characterTarget, collect)(CharacterHolder);