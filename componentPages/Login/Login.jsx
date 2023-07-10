"use client";
import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import LoginForm from "@/components/LoginForm/LoginForm";
import desktop from "./styles/DesktopStyles.module.css";
import tablet from "./styles/TabletStyles.module.css";
import mobile from "./styles/MobileStyles.module.css";
import mobileLandscape from "./styles/MobileLandscapeStyles.module.css";

export default function Login() {
  const { styles } = MediaQuery(desktop, tablet, mobile, mobileLandscape);
  return  styles !== null && (
    <div className={styles.RegisterContainer}>
      <div className={styles.RegisterMainContainer}>
        <div className={styles.RegisterMainLeft}></div>
        <div className={styles.RegisterMainRight}>
          <div className={styles.RegisterMainRightFormContainer}>
            <div className={styles.RegisterMainRightFormHeader}>
              <h1>Login to your account</h1>
              <p>Start inspiring people with your work</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
