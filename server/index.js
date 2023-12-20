const express = require("express");
const dotenv = require("dotenv");

const { connectDatabase } = require("./connection");

const apiRoute = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 7000;
dotenv.config();

connectDatabase(process.env.DATABASE_URL).then(() =>
  console.log("MongoDb Connected!")
);

app.route("/api/v1", apiRoute);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
