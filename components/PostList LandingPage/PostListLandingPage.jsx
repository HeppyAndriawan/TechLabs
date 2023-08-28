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
    return new Promise(async (resolve) => {
      // Execute Fetch
      const findBy = {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          key: process.env.NEXT_PUBLIC_API_KEY,
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
      resolve(userdata);
    }).then(async (response) => {
      return response;
    });
  };

  // Fetch Data user
  const { data, isLoading } = useSWR("USER_POST", getUserProfile);
  
  return (
    styles !== null && (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="w-full h-fit flex flex-row justify-between items-center py-10">
          <h1 className="font-bold text-xl">{props.title}Our designs</h1>
          <div className="w-fit h-fit flex flex-row justify-center items-center">
            <span className="font-light text-l text-gray-600 mr-5">Sort By:</span>
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
        <div className="w-full flex flex-row flex-wrap justify-start pb-5">
          <SwitchTo condition={data !== undefined && data?.length === 0}>
            <div className={styles.postListEmptyContainer}>
              <div className={styles.postListEmpty}>
                <h1>There is no list of post provided</h1>
              </div>
            </div>
          </SwitchTo>

          <SwitchTo condition={data !== undefined && data?.length >= 1}>
            {data !== undefined &&
              data !== null &&
              data.map((info, index) => (
                <Post key={index} data={info} button={false} edit />
              ))}
          </SwitchTo>
        </div>
      </div>
    )
  );
}


/* 
  4. Post has no margin right, 
  Inspect say:
.nth-4n\:mr-0:nth-child(4n) {
  margin-right: 0px;
}
*/

/* 
showing maximum 8 posts
console.log(Post(0,7));

to put in wich line?
*/