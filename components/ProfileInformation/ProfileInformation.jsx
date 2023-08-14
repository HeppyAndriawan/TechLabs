"use client";
import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import { ImageIcon } from "@radix-ui/react-icons";
import { SwitchTo } from "@/tool/Switch/Switch";
import Capitalize from "@/tool/Capitalize/Capitalize";
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function ProfileInformation() {
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
    styles !== null &&
    data !== undefined && (
      <div className={styles.profileContainer}>
        <div className={styles.profileImageContainer}>
          <div className={styles.profileImageDotContainer}>
            <Image
              src="/images/dot.png"
              width={10}
              height={10}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.profileImageCircleContainer}>
            <Image
              src="/images/circle.png"
              width={10}
              height={10}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.profileImageProfileContainer}>
            <div className={styles.profileImageProfile}>
              <SwitchTo condition={data[0]?.image !== null}>
                <Image
                  src="/imgExample/profile.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </SwitchTo>
              <SwitchTo condition={data[0]?.image === null}>
                <div className={styles.profileImageEmpty}>
                  <ImageIcon />
                </div>
              </SwitchTo>
            </div>
          </div>
        </div>
        <div className={styles.profileInfoContainer}>
          <div className={styles.profileInfoDetailContainer}>
            <h1>{Capitalize("all", data[0]?.name)}</h1>
            <h5>{Capitalize("single", data[0]?.account_type)}</h5>
            <p>
              {data[0]?.description === null
                ? "No Description"
                : data[0]?.description}
            </p>
          </div>
          <div className={styles.profileInfoAddressContainer}>
            <div className={styles.profileInfoAddress}>
              <div className={styles.profileInfoAddressIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.9999 0.365723C5.09053 0.365723 1.88428 3.45947 1.88428 7.22822C1.88428 10.2376 6.1874 15.2157 8.04365 17.2407C8.29677 17.522 8.63427 17.6626 8.9999 17.6626C9.36552 17.6626 9.70302 17.522 9.95615 17.2407C11.8124 15.2438 16.1155 10.2376 16.1155 7.22822C16.1155 3.43135 12.9093 0.365723 8.9999 0.365723ZM9.2249 16.5657C9.08427 16.7063 8.8874 16.7063 8.7749 16.5657C7.39677 15.0751 2.86865 9.95635 2.86865 7.22822C2.86865 3.96572 5.6249 1.3501 8.9999 1.3501C12.3749 1.3501 15.1311 3.99385 15.1311 7.22822C15.1311 9.95635 10.603 15.047 9.2249 16.5657Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M8.9999 4.41577C7.34053 4.41577 5.9624 5.76577 5.9624 7.45327C5.9624 9.11265 7.3124 10.4908 8.9999 10.4908C10.6874 10.4908 12.0374 9.14077 12.0374 7.45327C12.0374 5.76577 10.6593 4.41577 8.9999 4.41577ZM8.9999 9.47827C7.8749 9.47827 6.94678 8.55015 6.94678 7.42515C6.94678 6.30015 7.8749 5.37202 8.9999 5.37202C10.1249 5.37202 11.053 6.30015 11.053 7.42515C11.053 8.55015 10.1249 9.47827 8.9999 9.47827Z"
                    fill="#3056D3"
                  />
                </svg>
              </div>
              <div className={styles.profileInfoAddressInfo}>
                <h1>Address</h1>
                <p>{data[0]?.address === null ? "-" : data[0]?.address}</p>
              </div>
            </div>
            <div className={styles.profileInfoAddress}>
              <div className={styles.profileInfoAddressIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0312 3.06567H1.96865C1.06865 3.06567 0.337402 3.79692 0.337402 4.69692V13.3313C0.337402 14.2313 1.06865 14.9626 1.96865 14.9626H16.0312C16.9312 14.9626 17.6624 14.2313 17.6624 13.3313V4.69692C17.6624 3.79692 16.9312 3.06567 16.0312 3.06567ZM16.0312 4.05005C16.1718 4.05005 16.2843 4.07817 16.3968 4.16255L9.39365 8.40942C9.14053 8.55005 8.85928 8.55005 8.60615 8.40942L1.60303 4.16255C1.71553 4.1063 1.82803 4.05005 1.96865 4.05005H16.0312ZM16.0312 13.95H1.96865C1.63115 13.95 1.32178 13.6688 1.32178 13.3032V5.14692L8.07178 9.25318C8.35303 9.42193 8.6624 9.5063 8.97178 9.5063C9.28115 9.5063 9.59053 9.42193 9.87178 9.25318L16.6218 5.14692V13.3032C16.678 13.6688 16.3687 13.95 16.0312 13.95Z"
                    fill="#3056D3"
                  />
                </svg>
              </div>
              <div className={styles.profileInfoAddressInfo}>
                <h1>Email</h1>
                <p>{data[0]?.email === null ? "-" : data[0]?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
