"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import WidthBTN from "@/components/WidthBTN/WidthBTN";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import $ from "jquery";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import desktop from "./styles/DesktopStyles.module.css";
import tablet from "./styles/TabletStyles.module.css";
import mobile from "./styles/MobileStyles.module.css";

export default function SignupForm() {
  const router = useRouter();
  const context = useAppContext();
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Reach Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // If Submit Buttom Active
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState(false);

  // Select Hendeler
  const selectHendeler = (e) => {
    setValue("user_account_type", e);
  };

  // Save new account
  const saveNewAccount = async (dataForm) => {
    $("html,body").animate({ scrollTop: 0 });
    setIsRegisterButtonActive(true);

    // Check Password Confirm
    if (dataForm.user_password !== dataForm.user_confirm_password) {
      setIsRegisterButtonActive(false);
      context.sendWarning(
        "alert",
        "Denied",
        `Password confirmation is not match. Please ry again.`
      );
      reset(
        { user_confirm_password: "" },
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

    // execute data to server
    new Promise((resolve) => {
      // Hashing Password
      const passwordHash = require("password-hash");
      const hashedPassword = passwordHash.generate(dataForm.user_password);

      const construct = {
        account_type: dataForm.user_account_type,
        name: dataForm.user_name,
        email: dataForm.user_email,
        password: hashedPassword,
        key: process.env.NEXT_PUBLIC_API_KEY,
      };

      resolve(construct);
    }).then(async (resolve) => {
      const headers = {
        "Content-Type": "application/json",
      };

      await axios
        .post(`/api/users`, resolve, {
          headers: headers,
        })
        .then(function (response) {
          // If Error Send Warning
          response.data.error &&
            context.sendWarning(
              "alert",
              "Error",
              "Error has been accrued, please reload the page and try again"
            );

          // If Success redirect to login page
          if (!response.data.error) {
            setIsRegisterButtonActive(false);
            context.sendWarning(
              "default",
              "Success",
              "Register is completed. Now you can login with your email and password."
            );

            reset(
              {
                user_account_type: "",
                user_name: "",
                user_email: "",
                user_password: "",
                user_confirm_password: "",
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
              router.push("/login");
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
      <form
        className={styles.RegisterMainRightFormInput}
        onSubmit={handleSubmit(saveNewAccount)}
      >
        <div className={styles.RegisterMainRightFormInputContainer}>
          <div className={styles.RegisterMainRightFormInputList}>
            <Label className={styles.inputLable}>
              Account Type *{" "}
              {errors.user_account_type && (
                <span className={styles.inputError}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Select onValueChange={(e) => selectHendeler(e)} required>
              <SelectTrigger>
                <SelectValue placeholder="Options" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client">Client</SelectItem>
                <SelectItem value="tailor">Tailor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className={styles.RegisterMainRightFormInputList}>
            <Label className={styles.inputLable}>
              Name *{" "}
              {errors.user_name && (
                <span className={styles.inputError}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Input
              type="text"
              inputMode="text"
              placeholder="full name"
              {...register("user_name", {
                required: true,
              })}
            />
          </div>
          <div className={styles.RegisterMainRightFormInputList}>
            <Label className={styles.inputLable}>
              Email *{" "}
              {errors.user_email && (
                <span className={styles.inputError}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Input
              type="text"
              inputMode="email"
              placeholder="email"
              {...register("user_email", {
                required: true,
              })}
            />
          </div>
          <div className={styles.RegisterMainRightFormInputList}>
            <Label className={styles.inputLable}>
              Password *{" "}
              {errors.user_password && (
                <span className={styles.inputError}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Input
              type="password"
              inputMode="text"
              placeholder="password"
              {...register("user_password", {
                required: true,
              })}
            />
          </div>
          <div className={styles.RegisterMainRightFormInputList}>
            <Label className={styles.inputLable}>
              Confirm Password *{" "}
              {errors.user_confirm_password && (
                <span className={styles.inputError}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Input
              type="password"
              inputMode="text"
              placeholder="confirm"
              {...register("user_confirm_password", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className={styles.RegisterMainRightFormInputContainer}>
          <WidthBTN
            type="submit"
            name={isRegisterButtonActive === false ? "Sign Up" : "Loading..."}
          />
        </div>
        <div className={styles.RegisterMainRightFormInputContainer}>
         <h1>Already have an account ? <button type="button" onClick={()=> router.push("/login")}>Sign In</button></h1>
        </div>
      </form>
    )
  );
}
