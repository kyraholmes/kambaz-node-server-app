import * as enrollmentsDao from "./dao.js";

export default function ModuleRoutes(app) {

  app.get("/api/enrollments/", (req, res) => {
    const status = enrollmentsDao.findAllEnrollments();
    res.send(status);
  });

}
