import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    question: String,
    questionType: String,
    points: Number,
    possibleAnswers: [String],
    correctAnswers: [String],
    quiz: {type: String, ref: "QuizModel"}

  },
  { collection: "quizQuestions"}
)

export default schema;