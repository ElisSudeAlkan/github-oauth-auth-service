const express = require("express");
const router = express.Router();

router.get("/github", (req, res) => {
  res.send("Placeholder: GitHub OAuth will be implemented in the task.");
});

module.exports = router;