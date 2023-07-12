"use client";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import EditProfile from "@/components/EditProfile/EditProfile";
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
  const { data, isLoading } = useSWR("USER_LIST", getUserProfile);

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
          <h5 className={styles.setting.form.h5}>* Profile Information</h5>
          <EditProfile />
        </div>
        <div></div>
      </div>
    )
  );
}
