import * as quizzesDao from "./dao.js"

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
}