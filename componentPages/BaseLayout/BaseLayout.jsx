"use Client";
import React, { useEffect } from "react";
import $ from "jquery";
import WarningMessage from "@/components/WarningMessage/WarningMessage";
import "./styles/styles.moodule.css";

export default function BaseLayout(props) {
  useEffect(() => {
    $("html,body").animate({ scrollTop: 0 });
  }, []);

  return (
    <div className="layoutContainer" {...props}>
      <NavBar />
      <WarningMessage />
      <div className="min-h-[100dvh]">{props.children}</div>
    </div>
  );
}
