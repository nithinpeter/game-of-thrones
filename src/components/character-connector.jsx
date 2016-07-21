import React from "react";
import c from "../helpers/constants";

const CharacterConnector = ({ index, relationship, total }) => {

    return <div style={style.getConnectorStyle(index)}>
      <div style={style.getTextStyle(index)}>{relationship.type.toUpperCase()}</div>
    </div>
}

const style = {
  connectorStyle: {
    width: 5,
    height: 100,
    border: "2px dashed gray",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end", 
  },
  textStyle: {
    fontSize: 12,
  },
  getConnectorStyle(index) {
    let multiplier = index%2 == 0 ? 1 : -1;
    return Object.assign({}, this.connectorStyle, {
      transform: `rotate(${45 * multiplier}deg)`,
      transformOrigin: `${20 * multiplier}px -40px`,
      justifyContent: `${multiplier == 1 ? "flex-end" : "flex-start"}`
    })
  },
  getTextStyle(index) {
    let multiplier = index%2 == 0 ? 1 : -1;
    return Object.assign({}, this.textStyle, {transform: `rotate(${-90 * multiplier}deg)`})
  }

}

export default CharacterConnector;