"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import $ from "jquery";
import axios from "axios";
import { useSWRConfig } from "swr";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { ConvertFileBase64 } from "@/tool/ConvertFileBase64/ConvertFileBase64";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CameraIcon } from "@radix-ui/react-icons";
import { SwitchTo } from "@/tool/Switch/Switch";
import ShortBTN from "../ShortBTN/ShortBTN";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function EditProfile(props) {
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
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Get Image URL String
  const [profileImage, setProfileImage] = useState("");
  const image = watch("user_image");
  useEffect(() => {
    if (image && image?.length !== 0) {
      const exportImage = async () => {
        if (image[0].type !== "image/jpeg") {
          context.sendWarning(
            "alert",
            "Fail",
            "File type not supported, the image should be a jpg or jpeg"
          );
          reset(
            {
              user_image: [],
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

        const newImage = [];
        const reduce = require("image-blob-reduce")();
        await reduce.toBlob(image[0], { max: 500 }).then((blob) => {
          const newObject = Object.assign(blob, { name: image[0].name });
          newImage.push(newObject);
        });
        const converted = await ConvertFileBase64(newImage[0]);
        setProfileImage(converted);
      };
      exportImage();
    }
  }, [image]);

  // Set Data Value to the input
  useEffect(() => {
    if (dataUser !== undefined) {
      if (dataUser[0].image !== null) {
        setProfileImage(dataUser[0].image);
      } else {
        setProfileImage("/images/55x55.png");
      }

      setValue("user_account_type", dataUser[0].account_type);
      setValue("user_name", dataUser[0].name);
      setValue("user_email", dataUser[0].email);
      setValue(
        "user_address",
        dataUser[0].address === null ? "" : dataUser[0].address
      );
      setValue(
        "user_information",
        dataUser[0].description === null ? "" : dataUser[0].description
      );
    }
  }, [dataUser]);

  // If Submit Buttom Active
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  // If Submit Buttom Active
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState(false);

  // Sellect Image Hendeler
  const sellectImage = () => {
    $("#myfile").click();
  };

  // Save New Data Profile
  const saveProfileHendeler = async (dataForm) => {
    setIsRegisterButtonActive(true);

    new Promise((resolve) => {
      const newDataUser = {
        ...dataUser[0],
        account_type: dataForm.user_account_type,
        name: dataForm.user_name,
        email: dataForm.user_email,
        description: dataForm.user_information,
        address: dataForm.user_address,
        image: profileImage,
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
              "Profile has been updated successfully. "
            );
            setIsRegisterButtonActive(false);
            setIsProfileEdit(false);
            reset(
              {
                user_account_type: "",
                user_address: "",
                user_email: "",
                user_information: "",
                user_name: "",
                user_image: [],
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
          <h1 className={styles.editProfile.header.h1}>Account Information</h1>
          <p className={styles.editProfile.header.p}>
            Edit your profile detail here
          </p>
        </div>
        <form
          className={styles.editProfile.form.container}
          onSubmit={handleSubmit(saveProfileHendeler)}
        >
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
              <div className={styles.editProfile.form.input.img.container}>
                <div className={styles.editProfile.form.input.wrap}>
                  <Suspense>
                    <SwitchTo condition={profileImage !== ""}>
                      <Image
                        src={profileImage}
                        width={55}
                        height={55}
                        alt="Profile picture"
                        className={styles.editProfile.form.input.img.img}
                        onClick={sellectImage}
                      />
                    </SwitchTo>
                  </Suspense>
                </div>
                <div className={styles.editProfile.form.input.img.icon}>
                  <CameraIcon />
                </div>
              </div>
              <input
                type="file"
                id="myfile"
                className="hidden"
                disabled={isProfileEdit === false}
                {...register("user_image")}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
              <Label className={styles.inputLable}>
                Account Type *{" "}
                {errors.user_account_type && (
                  <span className={styles.inputError}>
                    ( This field is required )
                  </span>
                )}
              </Label>
              <Select
                defaultValue={watch("user_account_type")}
                onValueChange={(e) => selectHendeler(e)}
                disabled={isProfileEdit === false}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client">Client</SelectItem>
                  <SelectItem value="tailor">Tailor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className={styles.editProfile.form.input.list}>
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
                disabled={isProfileEdit === false}
                {...register("user_name", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
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
                disabled={isProfileEdit === false}
                {...register("user_email", {
                  required: true,
                })}
              />
            </div>
            <div className={styles.editProfile.form.input.list}>
              <Label className={styles.inputLable}>Address</Label>
              <Input
                type="text"
                inputMode="text"
                placeholder="address"
                disabled={isProfileEdit === false}
                {...register("user_address")}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.listWidth}>
              <Label className={styles.inputLable}>Information</Label>
              <Textarea
                type="text"
                inputMode="text"
                placeholder="information"
                disabled={isProfileEdit === false}
                {...register("user_information")}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <SwitchTo condition={isProfileEdit === false}>
              <ShortBTN
                type="button"
                name="Edit Profile"
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
