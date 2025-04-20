import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    course: String,
    questions: { type: String, ref: "QuestionModel"},
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
    lockQuestions: Boolean,
    dueDate: String,
    availDate: String,
    available: String
  },
  { collection: "quizzes"}
);  

export default schema;