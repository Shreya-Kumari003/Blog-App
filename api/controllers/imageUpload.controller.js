import { imageUploadUtils } from "../helpers/cloudinary.js";

export const handleImageUpload = async (req, res, next) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtils(url);

    res.json({
        success:true,
        result
    })

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occurred in image upload!",
    });
  }
};
