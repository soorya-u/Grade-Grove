const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  subject_code: {
    type: String,
    required: true,
  },
  int_marks: {
    type: Number,
    required: true,
  },
  ext_marks: {
    type: Number,
    required: true,
  },
  total_marks: {
    type: Number,
    required: true,
  },
});

const rankerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usn: {
    type: String,
    required: true,
  },
  cycle: {
    type: String,
  },
  subjects: [subjectSchema],
  total: {
    type: Number,
    required: true,
  },
  spga: {
    type: Number,
    required: true,
  },
});

const firstSemSchema = new mongoose.Schema({
  rank: [rankerSchema],
});

const secondSemSchema = new mongoose.Schema({
  rank: [rankerSchema],
});

const thirdSemSchema = new mongoose.Schema({
  rank: [rankerSchema],
});

const FirstSem = mongoose.model("first-sem", firstSemSchema, "first-sem");
const SecondSem = mongoose.model("second-sem", secondSemSchema, "second-sem");
const ThirdSem = mongoose.model("third-sem", thirdSemSchema, "third-sem");

module.exports = { FirstSem, SecondSem, ThirdSem };
