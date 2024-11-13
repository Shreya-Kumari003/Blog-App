import express from "express";

import { handleImageUpload } from "../controllers/imageUpload.controller.js";

import { upload } from "../helpers/cloudinary.js";

const router = express.Router();

router.post("/uploadImage", upload.single("my_file"), handleImageUpload);

export default router;
