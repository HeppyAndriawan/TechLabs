import { ConvertFileBase64 } from "../ConvertFileBase64/ConvertFileBase64";
export const getImage = async (data, resetInput) => {
    const newImage = [];
    const reduce = require("image-blob-reduce")();
    await reduce.toBlob(image[0], { max: 500 }).then((blob) => {
      const newObject = Object.assign(blob, { name: image[0].name });
      newImage.push(newObject);
    });
    const converted = await ConvertFileBase64(newImage[0]);
    return converted
};

