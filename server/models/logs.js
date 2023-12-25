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
    isMobile: {
      type: Boolean,
    },
    OS: {
      type: String,
    },
    browser: {
      type: String,
    },
    platform: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

const logs = mongoose.model("logs", logSchema, "logs");

module.exports = { logs };
