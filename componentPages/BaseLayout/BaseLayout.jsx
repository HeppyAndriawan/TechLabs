import React from "react";
import "./styles/styles.moodule.css";

export default function BaseLayout(props) {
  return (
    <div className="layoutContainer" {...props}>{ props.children }</div>
  );
}
