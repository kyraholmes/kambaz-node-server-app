import Database from "../Database/index.js" // gives access to the database
import model from "./model.js"; // gives access to the model (database)
import { v4 as uuidv4 } from "uuid";

// Gets the courses from the database
export function findAllCourses() {
  return model.find();
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

// finds all the courses for the given userId
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}

// takes the given course and adds it to the database
export function createCourse(course) {
  const newCourse = { ... course, _id: uuidv4()};
  return model.create(newCourse);
}






