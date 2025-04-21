import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    course: String,
    status: Boolean,
    title: String,
    description: String,
    quizType: String,
    points: Number,
    assignmentGroup: String,
    shuffle: Boolean,
    timeLimit: Number,
    attempts: Number,
    showAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webCam: Boolean,
    lockQuestions: Boolean,
    dueDate: String,
    availDate: String,
    available: String
  },
  { collection: "quizzes"}
);  

export default schema;