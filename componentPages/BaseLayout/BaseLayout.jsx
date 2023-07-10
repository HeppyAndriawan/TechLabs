import React from "react";
import WarningMessage from "@/components/WarningMessage/WarningMessage";
import "./styles/styles.moodule.css";

export default function BaseLayout(props) {
  return (
    <div className="layoutContainer" {...props}>
      <WarningMessage />
      {props.children}
    </div>
  );
}
