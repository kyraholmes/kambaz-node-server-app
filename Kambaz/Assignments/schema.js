import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: String,
    isNewA: String,
    title: String,
    course: String,
    points: String,
    Description: String,
    dueDate: String,
    due: String,
    avail: String,
    availDate: String,
  },
  { collection: "assignments" }
);

export default schema;