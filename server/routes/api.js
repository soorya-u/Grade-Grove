const {
  handleSemResult,
  handleUsnResult
} = require("../controllers/api");

const express = require("express");

const router = express.Router();

router.get("/:sem", handleSemResult);
router.get("/:sem/:usn", handleUsnResult);

module.exports = router;
