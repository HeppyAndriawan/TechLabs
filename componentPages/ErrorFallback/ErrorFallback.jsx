"use client";
import React, { useState, useEffect } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  return (
    styles !== null && (
      <div role="alert" className={styles.container}>
        <div className={styles.contentContainer}>
          <InfoCircledIcon />
          <h1>Something went wrong</h1>
          <p style={{ color: "red" }}>{`" ${error.message} "`}</p>
          <button onClick={resetErrorBoundary}> Refresh</button>
        </div>
      </div>
    )
  );
}
