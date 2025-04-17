import * as dao from "./dao.js" // allows calls to find things from the database

export default function AssignmentRoutes(app) {
  
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

 app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await dao.deleteAssignment(assignmentId);
   res.send(status);
  });

}


