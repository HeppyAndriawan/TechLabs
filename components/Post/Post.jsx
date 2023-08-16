"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import Capitalize from "@/tool/Capitalize/Capitalize";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import { SwitchTo } from "@/tool/Switch/Switch";
import {
  DotsVerticalIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import axios from "axios";
import { useSWRConfig } from "swr";
import PostFormEdit from "../PostFormEdit/PostFormEdit";
import { useGetPostData } from "../PostFormEdit/store/store";
import DialogBox from "../DialogBox/DialogBox";
import { useDialogEditPost } from "../DialogBox/store/store";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import $ from "jquery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function Post(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  const user = JSON.parse(props.data.user);
  const image = user.image === null ? "" : `${JSON.parse(user.image)}`;
  const { cache, mutate, ...extraConfig } = useSWRConfig();

  // Delete Post
  const deletePostHendeler = async (id) => {
    console.log(id);

    const findBy = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        id: id,
      },
    };

    await axios
      .delete(`/api/post`, findBy)
      .then(async function (response) {
        if (response.data.response.error) {
          return [];
        }
        setTimeout(() => {
          mutate("USER_POST");
        }, 500);
        return [response.data.response];
      })
      .catch(function (error) {
        console.log(`It's an Error : ${error.message}`);
        return null;
      });
  };

  // Dialog Store
  const dialog = useDialogEditPost((state) => state.isDialogOpen);
  const updateDialog = useDialogEditPost((state) => state.updateDialog);
  const resetDialog = useDialogEditPost((state) => state.resetDialog);

  // Post Data Store
  const updatePostData = useGetPostData((state) => state.updatePostData);

  // Trigger New Post
  const editPostHendeler = (data) => {
    setTimeout(() => {
      updateDialog(true);
      updatePostData(data);
    }, 500);
  };

  // DropDown Button Data
  const dropDown = {
    button: <DotsVerticalIcon />,
    section: [
      {
        title: "Option",
        list: [
          {
            name: "Edit",
            action: () => editPostHendeler(props.data),
            icon: <Pencil2Icon />,
          },
          {
            name: "Delete",
            action: () => deletePostHendeler(props.data.id),
            icon: <TrashIcon />,
          },
        ],
      },
    ],
  };

  return (
    styles !== null && (
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <div className={styles.postHeader}>
            <div className={styles.postUserProfile.container}>
              <div className={styles.postUserProfile.imageProfile.constainer}>
                {image === null && (
                  <Suspense>
                    <Image
                      className={styles.postUserProfile.imageProfile.image}
                      src={`${JSON.parse(user.image)}`}
                      width={0}
                      height={0}
                      alt="Picture Profile"
                    />
                  </Suspense>
                )}
              </div>
              <div className={styles.postUserProfile.info.container}>
                <h1 className={styles.postUserProfile.info.h1}>{user.name}</h1>
                <p className={styles.postUserProfile.info.p}>
                  {Capitalize("single", user.role)}
                </p>
              </div>
            </div>
            <div className={styles.postUserProfile.button.container}>
              <button className={styles.postUserProfile.button.button}>
                Follow
              </button>
            </div>
          </div>
          <div className={styles.postUserProfile.image.container}>
            <Carousel
              button={props.button}
              data={JSON.parse(props.data.image)}
            />
          </div>
          <div className={styles.postSaparator}></div>
          <div className={styles.postDescription.container}>
            <h1 className={styles.postDescription.h1}>{props.data.title}</h1>
            <p className={styles.postDescription.p}>
              {`${props.data.information.substring(0, 150)}...`}
            </p>
          </div>
          <div className={styles.postSaparator}></div>
          <div className={styles.postButton.container}>
            <div className={styles.postButton.buttonWrap}>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9874 1.69499C16.0331 0.736312 14.7681 0.151192 13.421 0.0453197C12.0738 -0.0605522 10.7333 0.319805 9.6415 1.11769C8.4961 0.264034 7.07044 -0.123053 5.65162 0.0343756C4.23279 0.191804 2.92619 0.882054 1.99494 1.96613C1.06368 3.0502 0.57694 4.44756 0.632735 5.87683C0.68853 7.3061 1.28272 8.6611 2.29564 9.66897L7.88606 15.2796C8.35419 15.7413 8.98468 16 9.6415 16C10.2983 16 10.9288 15.7413 11.397 15.2796L16.9874 9.66897C18.0385 8.60932 18.6284 7.17599 18.6284 5.68198C18.6284 4.18796 18.0385 2.75464 16.9874 1.69499ZM15.718 8.42416L10.1276 14.0258C10.064 14.0902 9.9883 14.1413 9.90486 14.1761C9.82142 14.211 9.73191 14.2289 9.6415 14.2289C9.5511 14.2289 9.46159 14.211 9.37815 14.1761C9.29471 14.1413 9.219 14.0902 9.15538 14.0258L3.56496 8.3971C2.85896 7.67398 2.46363 6.7026 2.46363 5.691C2.46363 4.6794 2.85896 3.70802 3.56496 2.9849C4.28438 2.27318 5.25466 1.8741 6.26565 1.8741C7.27663 1.8741 8.24691 2.27318 8.96633 2.9849C9.05002 3.06944 9.14959 3.13655 9.25929 3.18234C9.36899 3.22814 9.48665 3.25172 9.6055 3.25172C9.72434 3.25172 9.842 3.22814 9.9517 3.18234C10.0614 3.13655 10.161 3.06944 10.2447 2.9849C10.9641 2.27318 11.9344 1.8741 12.9453 1.8741C13.9563 1.8741 14.9266 2.27318 15.646 2.9849C16.3617 3.69854 16.77 4.66466 16.7835 5.67628C16.797 6.68791 16.4145 7.66459 15.718 8.3971V8.42416Z"
                  fill="#637381"
                />
              </svg>

              <button className={styles.postButton.button}>Like</button>
            </div>
            <div className={styles.postButton.buttonWrap}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.84849 3.10931H15.527C16.3299 3.10931 16.9868 3.76623 16.9868 4.56913V13.328C16.9868 14.1309 16.3299 14.7878 15.527 14.7878H3.84849C3.04559 14.7878 2.38867 14.1309 2.38867 13.328V4.56913C2.38867 3.76623 3.04559 3.10931 3.84849 3.10931Z"
                  stroke="#637381"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9868 4.56915L9.68775 9.67851L2.38867 4.56915"
                  stroke="#637381"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <button className={styles.postButton.button}>Message</button>
            </div>
            <SwitchTo condition={props.edit === true}>
              <div className={styles.postButton.buttonWrap}>
                <DropDownMenu data={dropDown} />
                <DialogBox
                  title="Edit Post"
                  subTitle="let's start to share ideas with others, and show your creativity."
                  open={dialog}
                  openChange={resetDialog}
                >
                  <PostFormEdit />
                </DialogBox>
              </div>
            </SwitchTo>
          </div>
        </div>
      </div>
    )
  );
}

/**
 * 1. How To Use
 * <Post data={info} />
 */

/**
 * PLEASE CREATE EDIT POST AND PUSH TO GITHUB
 */
