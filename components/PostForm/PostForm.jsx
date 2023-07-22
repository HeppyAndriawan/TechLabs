import React, { useState, useEffect } from "react";
import $ from "jquery";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ConvertFileBase64 } from "@/tool/ConvertFileBase64/ConvertFileBase64";
import Carousel from "../Carousel/Carousel";
import Image from "next/image";
import ShortBTN from "../ShortBTN/ShortBTN";
import { SwitchTo } from "@/tool/Switch/Switch";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function PostForm() {
  const context = useAppContext();
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Reach Hook Form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // If Submit Buttom Active
  const [isPostButtonActive, setIsPostButtonActive] = useState(false);

  // Convert Image to Base64
  const ImageConvert = async (file) => {
    return new Promise(async (resolve) => {
      if (file.type !== "image/jpeg") {
        context.sendWarning(
          "alert",
          "Fail",
          "File type not supported, the image should be a jpg or jpeg"
        );
        reset(
          {
            post_images: [],
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
      await reduce.toBlob(file, { max: 500 }).then((blob) => {
        const newObject = Object.assign(blob, { name: file.name });
        newImage.push(newObject);
      });
      const converted = await ConvertFileBase64(newImage[0]);
      resolve(converted);
    });
  };

  // Get Image URL String
  const [postImages, setPostImages] = useState([]);
  const image = watch("post_images");
  useEffect(() => {
    if (image && image?.length !== 0) {
      const exportImage = async () => {
        // Create Image list Object
        const dataImages = [];
        for (let i = 0; i < image.length; i++) {
          ImageConvert(image[i]).then((response) => {
            setPostImages((prevList) => [...prevList, response]);
          });
        }
      };
      exportImage();
    }
  }, [image]);


  // Save Post Hendeler
  const savePostHendeler = (dataForm) => {
    console.log(dataForm);
  };

  return (
    styles !== null && (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(savePostHendeler)}>
          <div className={styles.input.container}>
            <Label>
              Title * <br />
              {errors.post_title && (
                <span className={styles.input.error}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Input
              type="text"
              inputMode="text"
              placeholder="post title"
              className={styles.input.input}
              {...register("post_title", {
                required: true,
              })}
            />
          </div>
          <div className={styles.input.container}>
            <Label className={styles.input.label}>
              Description * <br />
              {errors.post_description && (
                <span className={styles.input.error}>
                  ( This field is required )
                </span>
              )}
            </Label>
            <Textarea
              type="text"
              inputMode="text"
              placeholder="post description"
              className={styles.input.textarea}
              {...register("post_description", {
                required: true,
              })}
            />
          </div>
          <SwitchTo condition={postImages.length === 0}>
            <div className={styles.input.container}>
              <Label>Images *</Label>
              <Input
                type="file"
                multiple
                className={styles.input.file}
                {...register("post_images")}
              />
            </div>
          </SwitchTo>
          <SwitchTo condition={postImages.length !== 0}>
            <div className={styles.input.container}>
              <Carousel data={postImages} />
            </div>
          </SwitchTo>
          <div className={styles.button.container}>
            <ShortBTN
              type="submit"
              name={isPostButtonActive === false ? "Share Post" : "Loding..."}
            />
          </div>
        </form>
      </div>
    )
  );
}
