"use client";
import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import ProfileInformation from "@/components/ProfileInformation/ProfileInformation";
import PostList from "@/components/PostList/PostList";
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function MyAccount() {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  return (
    styles !== null && (
      <div className={styles.myAccountContainer}>
        <div className={styles.myAccountProfile}>
          <ProfileInformation />
        </div>
        <div className={styles.myAccountPost}>
          <PostList data={[]} title="Posts"/>
        </div>
      </div>
    )
  );
}

// Create My Account Page
