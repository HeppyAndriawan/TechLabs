import React, { useState, useEffect } from "react";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import { useSWRConfig } from "swr";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ConvertFileBase64 } from "@/tool/ConvertFileBase64/ConvertFileBase64";
import Carousel from "../Carousel/Carousel";
import ShortBTN from "../ShortBTN/ShortBTN";
import { SwitchTo } from "@/tool/Switch/Switch";
import axios from "axios";
import { useDialog } from "../DialogBox/store/store";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";

export default function PostForm() {
  const context = useAppContext();
  const { cache, mutate, ...extraConfig } = useSWRConfig();
  const user = cache.get("USER_LIST").data;
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Reach Hook Form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Input show/hide state
  const [isTitle, setIsTitle] = useState(true);
  const [isDescription, setIsDescription] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

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
        setPostImages([]);
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

  // Title Continue Hendeler
  const titleContinue = () => {
    if (watch("post_title") === undefined || watch("post_title") === "") {
      return;
    }
    setIsTitle(false);
    setIsDescription(true);
  };

  // Description Continue Hendeler
  const descriptionContinue = () => {
    if (
      watch("post_description") === undefined ||
      watch("post_description") === ""
    ) {
      return;
    }
    setIsDescription(false);
    setIsImage(true);
  };

  // Images Continue Hendeler
  const imagesContinue = () => {
    if (
      watch("post_images").length === postImages.length &&
      postImages.length !== 0
    ) {
      setIsImage(false);
      setIsPreview(true);
    }
    return;
  };

  // Dialog Store
  const resetDialog = useDialog((state) => state.resetDialog);

  // Save Post Hendeler
  const savePostHendeler = async (dataForm) => {
    setIsPostButtonActive(true);
    new Promise((resolve) => {
      const time = new Date().getTime();
      const userProfile = {
        image: JSON.stringify(user[0].image),
        name: user[0].name,
        role: user[0].account_type,
      };
      const newPost = {
        userId: `${user[0].id}`,
        user: JSON.stringify(userProfile),
        title: dataForm.post_title,
        information: dataForm.post_description,
        image: JSON.stringify(postImages),
        time: `${time}`,
      };

      resolve(newPost);
    }).then(async (response) => {
      const headers = {
        "Content-Type": "application/json",
      };

      await axios
        .post(`/api/post`, response, {
          headers: headers,
        })
        .then(function (response) {
          setIsPostButtonActive(false);

          // If Error Send Warning
          response.data.error &&
            context.sendWarning(
              "alert",
              "Error",
              "Error has been accrued, please reload the page and try again"
            );

          // If Success redirect to login page
          if (!response.data.error) {
            context.sendWarning(
              "default",
              "Success",
              "Your post has been submitted to the public successfully."
            );

            reset(
              {
                post_title: "",
                post_description: "",
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
              mutate("USER_POST");
            }, 500);
            resetDialog();
          }
        })
        .catch(async function (error) {
          context.sendWarning("alert", "Error", error.message);
        });
    });
  };

  return (
    styles !== null && (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(savePostHendeler)}>
          <SwitchTo condition={isPreview === true}>
            <div className={styles.preview.container}>
              <div className={styles.input.container}>
                {postImages.length !== 0 ? (
                  <Carousel data={postImages} />
                ) : (
                  "No images..."
                )}
              </div>
              <div className={styles.input.container}>
                <h1 className={styles.preview.h1}>
                  {watch("post_title") !== undefined
                    ? watch("post_title")
                    : "Title is not set..."}
                </h1>
                <p className={styles.preview.p}>
                  {watch("post_description") !== undefined
                    ? watch("post_description")
                    : "Description is not set..."}
                </p>
              </div>
            </div>
          </SwitchTo>
          <SwitchTo condition={isTitle === true}>
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
            <div className={styles.button.container}>
              <ShortBTN
                type="button"
                name="Continue"
                className={styles.button.single ? styles.button.single : ""}
                onClick={titleContinue}
              />
            </div>
          </SwitchTo>
          <SwitchTo condition={isDescription === true}>
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
            <div className={styles.button.container}>
              <ShortBTN
                type="button"
                name="Back"
                className={styles.button.double ? styles.button.double : ""}
                onClick={() => {
                  setIsTitle(true);
                  setIsDescription(false);
                }}
              />
              <ShortBTN
                type="button"
                name="Continue"
                className={styles.button.double ? styles.button.double : ""}
                onClick={descriptionContinue}
              />
            </div>
          </SwitchTo>
          <SwitchTo condition={isImage === true}>
            <div className={styles.input.container}>
              <Label>Images *</Label>
              <Input
                type="file"
                multiple
                className={styles.input.file}
                {...register("post_images")}
              />
            </div>
            <div className={styles.button.container}>
              <ShortBTN
                type="button"
                name="Back"
                className={styles.button.double ? styles.button.double : ""}
                onClick={() => {
                  setIsDescription(true);
                  setIsImage(false);
                  setPostImages([]);
                }}
              />
              <ShortBTN
                type="button"
                name="Continue"
                className={styles.button.double ? styles.button.double : ""}
                onClick={imagesContinue}
              />
            </div>
          </SwitchTo>
          <SwitchTo
            condition={
              isTitle === false && isDescription === false && isImage === false
            }
          >
            <div className={styles.button.container}>
              <ShortBTN
                type="button"
                name="Back"
                className={styles.button.double ? styles.button.double : ""}
                onClick={() => {
                  setIsPreview(false);
                  setIsImage(true);
                  setPostImages([]);
                }}
              />
              {watch("post_title") !== undefined &&
                watch("post_description") !== undefined && (
                  <ShortBTN
                    type="submit"
                    className={styles.button.double ? styles.button.double : ""}
                    name={
                      isPostButtonActive === false ? "Share Post" : "Loding..."
                    }
                  />
                )}
            </div>
          </SwitchTo>
        </form>
      </div>
    )
  );
}
