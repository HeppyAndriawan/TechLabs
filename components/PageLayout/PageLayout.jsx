"use client"
import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import desktop from "./styles/DesktopStyles.module.css";
import tablet from "./styles/TabletStyles.module.css";
import mobile from "./styles/MobileStyles.module.css";

export default function PageLayout(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  return (
    styles !== null && (
      <div className={styles.pageContainer}>{props.children}</div>
    )
  );
}
