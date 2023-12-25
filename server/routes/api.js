const { handleSemResult, handleUsnResult } = require("../controllers/api");

const { handleLogs } = require("../middlewares/logs");

const express = require("express");

const router = express.Router();

router.get("/:sem", handleLogs, handleSemResult);
router.get("/:sem/:usn", handleLogs, handleUsnResult);

module.exports = router;
