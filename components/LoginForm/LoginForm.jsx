"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import WidthBTN from "@/components/WidthBTN/WidthBTN";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import $ from "jquery";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import desktop from "./styles/DesktopStyles.module.css";
import tablet from "./styles/TabletStyles.module.css";
import mobile from "./styles/MobileStyles.module.css";

export default function LoginForm() {
  const router = useRouter();
  const context = useAppContext();
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  const { data: session, status } = useSession();

  // Check if authenticated then redirect to profile
  useEffect(() => {
    if (status === "authenticated") {
      setTimeout(() => {
        router.push("/my_account");
      }, 500);
    }
  }, [status]);

  // Reach Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // If Submit Buttom Active
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState(false);

  // Save new account
  const saveNewAccount = async (dataForm) => {
    $("html,body").animate({ scrollTop: 0 });
    setIsRegisterButtonActive(true);

    await signIn("credentials", {
      email: dataForm.user_email,
      password: dataForm.user_password,
      redirect: false,
    }).then(({ ok, error }) => {
      console.log(error);
      ok && router.push("/login");
      if (error) {
        context.sendWarning(
          "alert",
          "Denied",
          `Error : ${error}, Credentials do not match, check your email and password!`
        );
        setTimeout(() => {
          reset(
            {
              user_email: "",
              user_password: "",
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
        }, 500);
      }
      setIsRegisterButtonActive(false);
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
        </div>
        <div className={styles.RegisterMainRightFormInputContainer}>
          <WidthBTN
            type="submit"
            name={isRegisterButtonActive === false ? "Sign In" : "Loading..."}
          />
        </div>
        <div className={styles.RegisterMainRightFormInputContainer}>
          <h1>
            Don’t have an account ?{" "}
            <button type="button" onClick={() => router.push("/signup")}>
              Sign up
            </button>
          </h1>
        </div>
      </form>
    )
  );
}
