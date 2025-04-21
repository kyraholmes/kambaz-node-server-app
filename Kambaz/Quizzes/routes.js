import * as quizzesDao from "./dao.js"
import * as questionsDao from "../QuizQuestions/dao.js"

export default function QuizzesRoutes(app) {

  // sets the route for updating a quiz
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const {quizId} = req.params;
    const quizUpdates = req.body;

    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status)
  })

  //sets the route for deleting a quiz
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const {quizId} = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  })

  //sets the route for getting a quiz by id
  app.get("/api/quizzes/:quizId", async (req, res) => {
    const status = await quizzesDao.getQuizById(req.params.quizId);
    res.send(status);
  })

  //sets the route for getting the questions to a quiz
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const status = await questionsDao.findQuestionsForQuiz(req.params.quizId);
    res.send(status);
  }) 

  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    console.log(req.body);
    const { quizId } = req.params;
    const q = {
      ...req.body,
      quiz: quizId,
    };
    const newQ = await questionsDao.createQuestion(q);
    res.send(newQ);
  });
}