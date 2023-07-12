"use client";
import React, { useState, useEffect } from "react";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import $ from "jquery";
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
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import ShortBTN from "../ShortBTN/ShortBTN";
import { desktop, tablet, mobile } from "./styles/styles";

export default function EditProfile(props) {
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
      dataUser[0].image !== null
        ? setProfileImage(dataUser[0].image)
        : setProfileImage("/images/55x55.png");

      setValue("user_account_type", dataUser[0].account_type);
      setValue("user_name", dataUser[0].name);
      setValue("user_email", dataUser[0].email);
      setValue(
        "user_address",
        dataUser[0].address === null ? "" : dataUser[0].address
      );
      setValue(
        "user_information",
        dataUser[0].address === null ? "" : dataUser[0].address
      );
    }
  }, [dataUser]);

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
      console.log(dataUser[0]);

      const newDataUser = {
        ...dataUser[0],
        account_type: dataForm.user_account_type,
        name: dataForm.user_name,
        email: dataForm.user_email,
        description: dataForm.user_information,
        address: dataForm.user_address,
        image: JSON.stringify(profileImage),
      };

      resolve(newDataUser);
    }).then(async (response) => {

      // PLEASE FINISH THIS UPDATE DATA PROFILE 
      
      // await axios
      //   .patch(`/api/users?id=${response.id}`, response, {
      //     headers: headers,
      //   })
      //   .then(function (response) {
      //     response.data.error &&
      //       context.sendWarning(
      //         "alert",
      //         "Error",
      //         "An error has been accrued, the process has been canceled. Reload and try again."
      //       );
      //     if(!response.data.error){
      //       context.sendWarning(
      //         "default",
      //         "Success",
      //         "Profile has been updated successfully. "
      //       );
      //       setIsRegisterButtonActive(false);
      //       setTimeout(() => {
      //         reset(
      //           {
      //             PALLET_NAME: "",
      //             PALLET_MEASURE_L: "",
      //             PALLET_MEASURE_W: "",
      //             PALLET_MEASURE_H: "",
      //           },
      //           {
      //             keepErrors: true,
      //             keepDirty: true,
      //             keepIsSubmitted: false,
      //             keepTouched: false,
      //             keepIsValid: false,
      //             keepSubmitCount: false,
      //           }
      //         );
              
      //       }, 1000);
      //     }
          
           
      //   })
      //   .catch(async function (error) {
      //     context.sendWarning("alert", "Error", error.message);
      //   });
    });
  };

  return (
    styles !== null && (
      <div className={styles.editProfile.container}>
        <div className={styles.editProfile.header.container}>
          <h1 className={styles.editProfile.header.h1}>Account Information</h1>
          <p className={styles.editProfile.header.p}>Edit your profile here</p>
        </div>
        <form
          className={styles.editProfile.form.container}
          onSubmit={handleSubmit(saveProfileHendeler)}
        >
          <div className={styles.editProfile.form.input.container}>
            <div className={styles.editProfile.form.input.list}>
              <div className={styles.editProfile.form.input.img.container}>
                <div className={styles.editProfile.form.input.wrap}>
                  <Image
                    src={profileImage}
                    width={55}
                    height={55}
                    alt="Profile picture"
                    className={styles.editProfile.form.input.img.img}
                    onClick={sellectImage}
                  />
                </div>
                <div className={styles.editProfile.form.input.img.icon}>
                  <CameraIcon />
                </div>
              </div>
              <input
                type="file"
                id="myfile"
                className="hidden"
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
                {...register("user_information")}
              />
            </div>
          </div>
          <div className={styles.editProfile.form.input.container}>
            <ShortBTN
              type="submit"
              name={isRegisterButtonActive === false ? "Submit" : "Loding..."}
            />
          </div>
        </form>
      </div>
    )
  );
}
