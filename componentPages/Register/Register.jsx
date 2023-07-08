"use client";
import React, { useState, useEffect } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import SignupForm from "@/components/SignupForm/SignupForm";
import desktop from "./styles/DesktopStyles.module.css";
import tablet from "./styles/TabletStyles.module.css";
import mobile from "./styles/MobileStyles.module.css";
import mobileLandscape from "./styles/MobileLandscapeStyles.module.css";

export default function Register() {
  const { styles } = MediaQuery(desktop, tablet, mobile, mobileLandscape);

  return (
    styles !== null && (
      <div className={styles.RegisterContainer}>
        <div className={styles.RegisterMainContainer}>
          <div className={styles.RegisterMainLeft}></div>
          <div className={styles.RegisterMainRight}>
            <div className={styles.RegisterMainRightFormContainer}>
              <div className={styles.RegisterMainRightFormHeader}>
                <div className={styles.RegisterMainRightFormHeaderIcon}>
                  <CheckIcon />
                </div>
                <h1>Join our community</h1>
                <p>Start your journey with our product</p>
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
