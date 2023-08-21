"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import axios from "axios";
import { useSWRConfig } from "swr";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SwitchTo } from "@/tool/Switch/Switch";
import ShortBTN from "../ShortBTN/ShortBTN";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function EditLogin(props) {
  const router = useRouter();
  const context = useAppContext();
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Fetch Mutation
  const { mutate, cache } = useSWRConfig();
  const dataUser = cache.get("USER_LIST").data;

  // Reach Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Set Data Value to the input
  useEffect(() => {
    if (dataUser !== undefined) {
      setValue("user_login_email", dataUser[0].email);
    }
  }, [dataUser]);

  // If Submit Buttom Active
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  // If Submit Buttom Active
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState(false);

  // Save New Data Profile
  const saveLogineHendeler = async (dataForm) => {
    setIsRegisterButtonActive(true);

    // Check if the old password confirm
    const passwordHash = require("password-hash");
    const confirm = passwordHash.verify(
      dataForm.user_login_old_password,
      dataUser[0].password
    );
    if (confirm !== true) {
      setIsRegisterButtonActive(false);
      context.sendWarning(
        "alert",
        "Denied",
        "Old password confirmation is not confirm, please try again"
      );
      reset(
        {
          user_login_old_password: "",
          user_login_password: "",
          user_login_confirm_password: "",
        },
        {
          keepErrors: true,
          keepDirty: true,
          keepIsSubmitted: false,
          keepTouched: false,
          keepIsValid: false,
          keepSubmitCount: false,
        }
      );
      return;
    }

    new Promise((resolve) => {
      const hashedPAssword = passwordHash.generate(
        dataForm.user_login_password
      );
      const newDataUser = {
        ...dataUser[0],
        email: dataForm.user_login_email,
        password: hashedPAssword,
      };

      resolve(newDataUser);
    }).then(async (response) => {
      const headers = {
        "Content-Type": "application/json",
      };

      await axios
        .patch(`/api/users?id=${response.id}`, response, {
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
              "Login Info has been updated successfully. "
            );
            setIsRegisterButtonActive(false);
            setIsProfileEdit(false);
            reset(
              {
                user_login_email: "",
                user_login_old_password: "",
                user_login_password: "",
                user_login_confirm_password: "",
              },
              {
                keepErrors: true,
                keepDirty: true,
                keepIsSubmitted: false,
                keepTouched: false,
                keepIsValid: false,
                keepSubmitCount: false,
              }
            );
            setTimeout(() => {
              router.push("/my_account");
            }, 1000);
          }
        })
        .catch(async function (error) {
          context.sendWarning("alert", "Error", error.message);
        });
    });
  };

  return (
    styles !== null && (
      <div className={styles.editProfile.container}>
        <div className={styles.editProfile.header.container}>
          <h1 className={styles.editProfile.header.h1}>Sign in Information</h1>
          <p className={styles.editProfile.header.p}>
            Edit your login information here
          </p>
        </div>
        <form
          className={styles.editProfile.form.container}
          onSubmit={handleSubmit(saveLogineHendeler)}
        >
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
              <Label className={styles.inputLable}>
                Email *{" "}
                {errors.user_login_email && (
                  <span className={styles.inputError}>
                    ( This field is required )
                  </span>
                )}
              </Label>
              <Input
                type="text"
                inputMode="email"
                placeholder="email"
                disabled={isProfileEdit === false}
                {...register("user_login_email", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
              <Label className={styles.inputLable}>
                Old Password *{" "}
                {errors.user_login_old_password && (
                  <span className={styles.inputError}>
                    ( This field is required )
                  </span>
                )}
              </Label>
              <Input
                type="password"
                inputMode="text"
                placeholder="old password"
                disabled={isProfileEdit === false}
                {...register("user_login_old_password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
              <Label className={styles.inputLable}>
                Password *{" "}
                {errors.user_login_password && (
                  <span className={styles.inputError}>
                    ( This field is required )
                  </span>
                )}
              </Label>
              <Input
                type="password"
                inputMode="text"
                placeholder="password"
                disabled={isProfileEdit === false}
                {...register("user_login_password", {
                  required: true,
                })}
              />
            </div>
            <div className={styles.editProfile.form.input.list}>
              <Label className={styles.inputLable}>
                Confirm Password *{" "}
                {errors.user_login_confirm_password && (
                  <span className={styles.inputError}>
                    ( This field is required )
                  </span>
                )}
              </Label>
              <Input
                type="password"
                inputMode="text"
                placeholder="confirm Password"
                disabled={isProfileEdit === false}
                {...register("user_login_confirm_password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <SwitchTo condition={isProfileEdit === false}>
              <ShortBTN
                type="button"
                name="Edit Login"
                onClick={() => setIsProfileEdit(true)}
              />
            </SwitchTo>
            <SwitchTo condition={isProfileEdit === true}>
              <ShortBTN
                type="submit"
                name={isRegisterButtonActive === false ? "Submit" : "Loding..."}
              />
              <ShortBTN
                type="button"
                name="Cancel"
                onClick={() => setIsProfileEdit(false)}
              />
            </SwitchTo>
          </div>
        </form>
      </div>
    )
  );
}
