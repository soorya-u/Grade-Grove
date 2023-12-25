const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    origin: {
      type: String,
    },
    path: {
      type: String,
    },
    method: {
      type: String,
    },
    os: {
      type: String,
    },
    browser: {
      type: String,
    },
    platform: {
      type: String,
    },
  },
  { timestamps: true }
);

const logs = mongoose.model("logs", logSchema, "logs");

module.exports = { logs };
