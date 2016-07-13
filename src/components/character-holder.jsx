import React from "react";
import c from '../helpers/constants';
import { DropTarget } from 'react-dnd';

const characterTarget = {
  drop(props) {
      return { dropSuccess: true }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    data: monitor.getItem()
  };
}


const CharacterHolder = ({ imageUrl, name, id, connectDropTarget, isOver, data }) => {
    console.log(data, id)
    return connectDropTarget(
        <div>
            { (isOver && data && (data.id == id)) ? <div style={style.containerStyle}>
                    <img src={imageUrl} alt={name} style={style.imageStyle}/>
                    <span>{name}</span>        
                </div> : <div style={style.containerStyle}>
                    <img src={""} alt={"Drop here"} style={style.imageStyle}/>        
                </div>
            }
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