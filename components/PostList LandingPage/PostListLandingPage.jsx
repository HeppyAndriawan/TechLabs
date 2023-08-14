import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Post from "../Post/Post";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import { SwitchTo } from "@/tool/Switch/Switch";
import desktop from "./styles/DesktopStyle.module.css";
import tablet from "./styles/TabletStyle.module.css";
import mobile from "./styles/MobileStyle.module.css";

export default function PostList(props) {
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
          <SwitchTo condition={data !== undefined && data.length === 0}>
            <div className={styles.postListEmptyContainer}>
              <div className={styles.postListEmpty}>
                <h1>There is no list of post provided</h1>
              </div>
            </div>
          </SwitchTo>

          <SwitchTo condition={data !== undefined && data.length >= 1}>
            {data !== undefined &&
              data.map((info, index) => (
                <Post key={index} data={info} button={false} edit />
              ))}
          </SwitchTo>
        </div>

      </div>
    )
  );
}

{/* 
margin bottom mb-5
padding bottom pb-5
space-y-5 -> geht alles nicht
wie kann ich Abstand nach unten machen?

mr-[1vw] in styles Post, daher Abstand rechts 1, kann ich nicht auf 0 setzen
*/}