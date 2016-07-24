import React from "react";
import c from "../helpers/constants";

const CharacterConnector = ({ index, relationship, total }) => {

    return <div style={style.getConnectorStyle(index, total)}>
      <div style={style.getTextStyle(index, total)}>{relationship.type.toUpperCase()}</div>
    </div>
}

const style = {
  connectorStyle: {
    width: 5,
    height: 165,
    border: "1px dashed gray",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end", 
  },
  textStyle: {
    fontSize: 12,
  },
  getConnectorStyle(index, total) {
    
    if(total == 2) {
      
      let multiplier = index%2 == 0 ? 1 : -1;
      
      return Object.assign({}, this.connectorStyle, {
        transform: `rotate(${65 * multiplier}deg)`,
        transformOrigin: `${20 * multiplier}px -40px`,
        justifyContent: `${multiplier == 1 ? "flex-end" : "flex-start"}`
      })

    } else if(total == 1) {

      return Object.assign({}, this.connectorStyle, {
        justifyContent: "flex-end",
        height: 85,
      })

    }
  },
  getTextStyle(index, total) {
    let multiplier = index%2 == 0 ? 1 : -1;
    return Object.assign({}, this.textStyle, {transform: `rotate(${-90 * multiplier}deg)`})
  }

}

export default CharacterConnector;