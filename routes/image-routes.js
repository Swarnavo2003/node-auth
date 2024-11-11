const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const uploadMiddleware = require("../middlewares/upload-middleware");
const {
  uploadImageController,
  fetchImageController,
  deleteImageController,
} = require("../controllers/image-controller");
const router = express.Router();

// upload the files
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

// to get all the images
router.get("/get", authMiddleware, fetchImageController);

// delete image route
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);

module.exports = router;