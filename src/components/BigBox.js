import React from "react";
import classes from "./BigBox.module.css";

const bigBox = (props) => {
  const boxClass = props.isDark ? classes.darkBox : classes.lightBox;
  console.log(props.primaryText);

  return (
    <div className={`${boxClass} mx-2 mb-4`}>
      <div className={`${classes.top} ${classes[props.mediaName]}`}></div>

      <div className="flex justify-center mt-8">
        <props.icon size="2rem" color={props.iconColor} />
        <span
          className="font-bold text-gray-500 ml-1 pt-1"
          style={{ color: props.secondaryText }}
        >
          {props.name}
        </span>
      </div>
      {props.followers && (
        <>
          <h1
            className={`font-bold text-5xl text-center mt-2`}
            style={{ color: props.primaryText }}
          >
            {props.followers}
          </h1>
          <p
            className="text-gray-500 -mt-1 text-center text-m tracking-morewide"
            style={{ color: props.secondaryText }}
          >
            FOLLOWERS
          </p>
        </>
      )}
      {props.subscribers && (
        <>
          <h1
            className={`font-bold text-5xl text-center mt-2`}
            style={{ color: props.primaryText }}
          >
            {props.subscribers}
          </h1>
          <p
            className="text-gray-500 -mt-1 text-center text-m tracking-morewide"
            style={{ color: props.secondaryText }}
          >
            SUBSCRIBERS
          </p>
        </>
      )}
      <div
        className={`${props.trendsColor} flex justify-center font-bold text-sm mt-3`}
      >
        <span className="mt-1 mr-1">
          <props.trendsIcon />
        </span>
        <span>{props.trendsNumber} Today</span>
      </div>
    </div>
  );
};

export default bigBox;
