const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// Get all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

// Get single video by ID
router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (err) {
    res.status(404).json({ error: "Video not found" });
  }
});

module.exports = router;
