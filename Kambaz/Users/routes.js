import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js"; // allows calls to find things related to courses
import * as enrollmentsDao from "../Enrollments/dao.js"; // allows calls to find things related to enrollments

export default function UserRoutes(app) {
  const createUser = (req, res) => { };
  const deleteUser = (req, res) => { };
  const findAllUsers = (req, res) => { };
  const findUserById = (req, res) => { };

  // creates a new course and enrolls the current person in it
  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };
  app.post("/api/users/current/courses", createCourse);

  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params; // gets the user ID from the params of the api call
    if (userId === "current") {
      const currentUser = req.session["currentUser"]; //gets the current user from the session
      if (!currentUser) { // if there is no current user, send an error
        res.sendStatus(401);
        return
      }
      userId = currentUser._id;
    }
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };

  const findUnCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params; // gets the user ID from the params of the api call
    if (userId === "current") {
      
      const currentUser = req.session["currentUser"]; //gets the current user from the session
      if (!currentUser) { // if there is no current user, send an error
        res.sendStatus(401);
        return
      }
      userId = currentUser._id;
    }
    const courses = courseDao.findUnCoursesForEnrolledUser(userId);
    res.json(courses);
  };
  app.get("/api/users/:userId/uncourses", findUnCoursesForEnrolledUser); // how to call the request
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser); // how to call the request

  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signup = (req, res) => {
    const user = dao.findUserByUsername(req.body.username); 

    if (user) {
      res.status(400).json(
        { message: "Username already in use" });
      return;
    }

    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signin = (req, res) => {  
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };


  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
