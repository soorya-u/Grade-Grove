import mongoose from "mongoose";

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

export const FirstSem =
  mongoose.models?.first_sem ||
  mongoose.model("first_sem", firstSemSchema, "first-sem");
export const SecondSem =
  mongoose.models?.second_sem ||
  mongoose.model("second_sem", secondSemSchema, "second-sem");
export const ThirdSem =
  mongoose.models?.third_sem ||
  mongoose.model("third_sem", thirdSemSchema, "third-sem");
