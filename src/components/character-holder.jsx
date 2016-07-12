import React from "react";

const CharacterHolder = ({ imageUrl, name, id }) => {
    return <div style={style.containerStyle}>
        <img src={""} alt={"Drop here"} style={style.imageStyle}/>        
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

export default CharacterHolder;