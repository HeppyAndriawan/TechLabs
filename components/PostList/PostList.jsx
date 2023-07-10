import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
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
                <MenubarTrigger>Newest</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Most Liked</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <div>
          {/* Here is the Postting ls components */}
        </div>
      </div>
    )
  );
}
