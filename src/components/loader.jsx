import React from "react";

const Loader = () => <div style={style}>  
    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true" style={{fontSize: 40}}></i>
</div>

const style = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffe" 
};

export default Loader;