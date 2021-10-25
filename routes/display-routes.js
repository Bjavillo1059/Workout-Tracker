const router = require("express").Router();
const path = require("path");

const statsPath = (req, res) => {
  const filePath = path.join(__dirname, "../public/stats.html");
  res.sendFile(filePath);
};

const exercisePath = (req, res) => {
  const filePath = path.join(__dirname, "../public/exercise.html");
  res.sendFile(filePath);
};

router.get("/exercise", exercisePath);
router.get("/stats", statsPath);

module.exports = router;
