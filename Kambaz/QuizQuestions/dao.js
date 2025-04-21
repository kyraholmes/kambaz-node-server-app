import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

// finds all the questions for a given quiz
export function findQuestionsForQuiz(quizId) {
  return model.find({quiz: quizId});
}

// gets a question by Id
export function getQuestionById(questionId) {
  return model.findById(questionId);
}

// creates a new question
export function createQuestion(question) {
  const newQuestion = {...question, _id: uuidv4()}
  return model.create(newQuestion);
}

// deletes a question 
export function deleteQuestion(questionId) {
  return model.deleteOne(questionId);
}

// updates question
export function updateQuestion(questionId, qUpdates) {
  return model.updateOne({_id: questionId}, qUpdates);
}