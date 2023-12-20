const express = require("express");

const router = express.Router();

router.get("/:sem", handleTopResult);
router.get("/:sem/:usn", handleIndividualResult);

module.exports = router;
