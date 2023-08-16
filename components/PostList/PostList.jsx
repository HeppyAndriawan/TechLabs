import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Post from "../Post/Post";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "@radix-ui/react-icons";
import DialogBox from "../DialogBox/DialogBox";
import PostForm from "../PostForm/PostForm";
import { useDialog } from "../DialogBox/store/store";
import { SwitchTo } from "@/tool/Switch/Switch";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function PostList(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  const { data: session, status } = useSession();

  /* Henriette ----------------------------------------------- */
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
        },
        params: {
          email: response,
        },
      };

      const userdata = await axios
        .get(`/api/post`, findBy)
        .then(async function (response) {
          if (response.data.response.message) {
            return [];
          }
          return response.data.response;
        })
        .catch(function (error) {
          console.log(`It's an Error : ${error.message}`);
          return null;
        });

      return userdata;
    });
  };

  // Fetch Data user
  const { data, isLoading } = useSWR("USER_POST", getUserProfile);
  /* Henriette end ----------------------------------------------- */

  // Dialog Store
  const dialog = useDialog((state) => state.isDialogOpen);
  const updateDialog = useDialog((state) => state.updateDialog);
  const resetDialog = useDialog((state) => state.resetDialog);

  // Trigger New Post
  const createNewPost = () => {
    setTimeout(() => {
      updateDialog(true);
    }, 500);
  };
  return (
    styles !== null && (
      <div className={styles.postListContainer}>
        <div className={styles.postListHeader}>
          <h1>{props.title}</h1>
          <div className={styles.postListHeaderButton}>
            <span>Sort By:</span>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">
                  Newest
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">
                  Most Liked
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
            <Separator orientation="vertical" className="mx-2" />
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger
                  className="cursor-pointer"
                  onClick={() => createNewPost(true)}
                >
                  <PlusIcon className="mr-1" /> Create Post
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <div className={styles.postList}>
          <SwitchTo condition={data !== undefined && data.length === 0}>
            <div className={styles.postListEmptyContainer}>
              <div className={styles.postListEmpty}>
                <h1>There is no list of post provided</h1>
              </div>
            </div>
          </SwitchTo>

          {/* Henriette ----------------------------------------------- */}
          <SwitchTo condition={data !== undefined && data.length >= 1}>
            {data !== undefined &&
              data.map((info, index) => (
                <Post key={index} data={info} button={false} edit />
              ))}
          </SwitchTo>
          {/* Henriette end  ----------------------------------------------- */}
        </div>
        <DialogBox
          title="Create Post"
          subTitle="let's start to share ideas with others, and show your creativity."
          open={dialog}
          openChange={resetDialog}
        >
          <PostForm />
        </DialogBox>
      </div>
    )
  );
}
