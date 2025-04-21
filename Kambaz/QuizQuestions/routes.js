import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {
    // sets the route for updating a quiz
    app.put("/api/questions/:questionId", async (req, res) => {
      const {questionId} = req.params;
      const questionUpdates = req.body;
  
      const status = await questionsDao.updateQuestion(questionId, questionUpdates);
      res.send(status)
    })
  
    //sets the route for deleting a quiz
    app.delete("/api/questions/:questionId", async (req, res) => {
      const {questionId} = req.params;
      const status = await questionsDao.deleteQuestion(questionId);
      res.send(status);
    })
  
    //sets the route for getting a quiz by id
    app.get("/api/questions/:questionId", async (req, res) => {
      const status = await questionsDao.getQuestionById(req.params.questionId);
      res.send(status);
    })
}