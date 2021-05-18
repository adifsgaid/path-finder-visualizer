import React from "react";
import "./Node.css";

export default function ({isStart, isEnd}) {
  const classes = isStart ? "node-start" : isEnd ? "node-end" : " ";

  return <div className={`node ${classes}`}></div>;
}
