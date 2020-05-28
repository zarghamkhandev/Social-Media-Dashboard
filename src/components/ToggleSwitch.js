import React from "react";
import "./ToggleSwitch.css";

const toggleSwitch = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={props.clicked} /> <div></div>
    </label>
  );
};

export default toggleSwitch;
