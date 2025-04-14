import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


// enrolls the given user into the given course
export function enrollUserInCourse(userrId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = {_id: uuidv4(), user: userrId, course: courseId}
  enrollments.push(newEnrollment)

  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;

  Database.enrollments = enrollments.filter((enrollment) => 
    !(enrollment.user === userId && enrollment.course === courseId));
}

// gets all enrollments
export function findAllEnrollments() {
  return Database.enrollments;
}

