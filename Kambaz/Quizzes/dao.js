import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

// finds all the quizzes that have the given courseId
export function findQuizzesForCourse(courseId) {
  return model.find({course: courseId})
}

//finds a quiz by id
export function getQuizById(quizId) {
  return model.findById(quizId);
}

// creates a new quiz with a new id
export function addQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4(), questions: [] };
  return model.create(newQuiz);
}

// deletes a quiz based on id
export function deleteQuiz(quizId) {
  return model.deleteOne({_id: quizId});
}

//updates a quiz based on id
export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({_id: quizId}, quizUpdates);
}
