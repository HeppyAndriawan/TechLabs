import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Post from "../Post/Post";
import { Separator } from "@/components/ui/separator"
import { PlusIcon } from '@radix-ui/react-icons'
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function PostList(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  return (
    styles !== null && (
      <div className={styles.postListContainer}>
        <div className={styles.postListHeader}>
          <h1>{props.title}</h1>
          <div className={styles.postListHeaderButton}>
            <span>Sort By:</span>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Newest</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">Most Liked</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
            <Separator orientation="vertical" className="mx-2"/>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer"><PlusIcon className="mr-1"/> Create Post</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <div className={styles.postList}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    )
  );
}
