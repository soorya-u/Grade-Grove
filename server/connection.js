const mongoose = require("mongoose");

async function connectDatabase(url) {
  return await mongoose.connect(url, { dbName: "Top-Ten" });
}

module.exports = { connectDatabase };
