import React from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import $ from "jquery";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useSWRConfig } from "swr";
import ShortBTN from "../ShortBTN/ShortBTN";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function RemoveProfile(props) {
  const router = useRouter();
  const context = useAppContext();
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Fetch Mutation
  const { mutate, cache } = useSWRConfig();
  const dataUser = cache.get("USER_LIST").data;

  const removeAccount = async (id) => {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios
      .delete(`/api/users?id=${id}`,{
        headers: headers,
      })
      .then(function (response) {
        response.data.error &&
          context.sendWarning(
            "alert",
            "Error",
            "An error has been accrued, the process has been canceled. Reload and try again."
          );
        if (!response.data.error) {
          context.sendWarning(
            "default",
            "Success",
            "Profile has been removed permanently. You can not access your account anymore in the future. "
          );
          
          setTimeout(() => {
            signOut()
          }, 5000);
        }
      })
      .catch(async function (error) {
        context.sendWarning("alert", "Error", error.message);
      });
  };

  return (
    styles !== null && (
      <div className={styles.editProfile.container}>
        <div className={styles.editProfile.header.container}>
          <h1 className={styles.editProfile.header.h1}>Delete Account</h1>
          <p className={styles.editProfile.header.p}>
            Delete or remove your account permanently here, once you remove your
            account then it will not possible to undo and it will lost
            permanently.
          </p>

          <div className={styles.editProfile.form.input.removeAccount}>
            <ShortBTN
              type="button"
              name="Remove"
              onClick={() => removeAccount(dataUser[0].id)}
            />
          </div>
        </div>
      </div>
    )
  );
}
