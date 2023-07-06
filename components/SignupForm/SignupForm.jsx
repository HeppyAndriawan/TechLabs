"use client";
import React, { useState } from "react";
import WidthBTN from "@/components/WidthBTN/WidthBTN";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
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

import desktop from "./styles/DesktopStyles.module.css";
import tablet from "./styles/TabletStyles.module.css";
import mobile from "./styles/MobileStyles.module.css";

export default function SignupForm() {
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

  // Save new account
  const saveNewAccount = async (dataForm) => {
    console.log(dataForm);
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
        </div>
        <div className={styles.RegisterMainRightFormInputContainer}>
          <WidthBTN type="submit" name="Submit" />
        </div>
      </form>
    )
  );
}
