import React from "react";

const Character = ({ imageUrl, name, id }) => {
    return <div style={style.containerStyle}>
        <img src={imageUrl} alt={name} style={style.imageStyle}/>
        <span>{name}</span>        
    </div>
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

export default Character;