import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Post from "../Post/Post";
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function PostList(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  return (
    styles !== null && (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className={styles.postListHeader}>
          <h1>{props.title}Our designs</h1>
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
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-between">
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

{/* Klasse aus MyAccount mit Classname versehen statt CSS
<div className="flex flex-row flex-wrap">
<PostList data={[]} title="Our designs"/>
</div> 

margin bottom mb-5
padding bottom pb-5
space-y-5 -> geht alles nicht
wie kann ich Abstand nach unten machen?

mr-[1vw] in styles Post, daher Abstand rechts 1, kann ich nicht auf 0 setzen

woher bekomme ich mehr Post, Datenbank Anbindung?
*/}