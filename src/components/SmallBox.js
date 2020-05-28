import React from "react";
import "./SmallBox.css";

const smallBox = (props) => {
  const boxClass = props.isDark ? "darkBox" : "lightBox";
  return (
    <div className={`${boxClass} flex flex-wrap  text-center mb-4 mx-2 `}>
      <p
        className="w-1/2 text-gray-500 text-xs font-bold my-auto"
        style={{ color: props.secondaryText }}
      >
        {props.property}
      </p>
      <span className="w-1/2 my-auto ">
        <props.icon
          size="24"
          style={{ color: props.iconColor, margin: "auto" }}
        />
      </span>

      <h1
        className="w-1/2 text-white text-3xl font-bold my-auto"
        style={{ color: props.primaryText }}
      >
        {props.value}
      </h1>

      <div
        className={`w-1/2 flex justify-center font-bold my-auto ${props.trendsColor} text-xs`}
      >
        <span className="mt-1">
          <props.trendsIcon size="10" />
        </span>
        <span className="ml-1">{props.changeInTrends} %</span>
      </div>
    </div>
  );
};

export default smallBox;
