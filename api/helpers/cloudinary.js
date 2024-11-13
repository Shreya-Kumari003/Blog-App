import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dfp2mubw9",
  api_key: "725633652953337",
  api_secret: "zEsiE3RfXl35hhvAl8fY5iiD8KY",
});

const storage = multer.memoryStorage();

async function imageUploadUtils(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

export { upload, imageUploadUtils };
