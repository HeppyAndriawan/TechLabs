"use client";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { TabMenu } from "@/components/TabMenu/TabMenu";
import EditProfile from "@/components/EditProfile/EditProfile";
import EditLogin from "@/components/EditLogin/EditLogin";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function Setting() {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  const { data: session, status } = useSession();

  // Fetch Function
  const getUserProfile = async () => {
    return new Promise((resolve) => {
      // Key Session
      const key = atob(session.user.key);

      resolve(key);
    }).then(async (response) => {
      // Execute Fetch
      const findBy = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          email: response,
        },
      };

      const userdata = await axios
        .get(`/api/users`, findBy)
        .then(async function (response) {
          return [response.data.response];
        })
        .catch(function (error) {
          console.log(`It's an Error : ${error.message}`);
          return null;
        });

      return userdata;
    });
  };

  // Fetch Data user
  const { isLoading } = useSWR("USER_LIST", getUserProfile);

  // Data Menu Tab
  const menuTabInfo = [
    {
      title: "Profile",
      component: <EditProfile />,
    },
    {
      title: "Login",
      component: <EditLogin />,
    },
  ];

  return (
    styles !== null && (
      <div className={styles.setting.container}>
        <div className={styles.setting.header.container}>
          <h1 className={styles.setting.header.h1}>Settings Page</h1>
          <p className={styles.setting.header.p}>
            Here you can edit or delete your profile information
          </p>
        </div>
        <div className={styles.setting.form.container}>
          <TabMenu default="Profile" data={menuTabInfo} />
        </div>
      </div>
    )
  );
}
