import React from "react";
import './sideBarButton.css'

const Sidebutton = props => {
    return(
    <button className="sidebarbutton" onClick={props.click}>
        <div className="buttonline"></div>
        <div className="buttonline"></div>
        <div className="buttonline"></div>
    </button>
    )
}

export default Sidebutton;