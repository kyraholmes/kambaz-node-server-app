const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2025-04-01",
  completed: false,
  score: 0,
};

const module = {
  id: 1,
  name: "Working with NodeJS",
  description: "How to create servers and use them in your Web App",
  course: "CS4550"
}

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // to change assignment score
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore);
    res.json(assignment);
  });

  // to change assignment completed boolean
  app.get("/lab5/assignment/completed/:completedBool", (req, res) => {
    const { completedBool } = req.params;
    assignment.completed = completedBool;
    res.json(assignment);
  });


  // gets the module in JSON
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  // gets the module name
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

  // updates module title
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });

};
