import Database from "../Database/index.js" // gives access to the database
import { v4 as uuidv4 } from "uuid";

// Gets the courses from the database
export function findAllCourses() {
  return Database.courses; 
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database;
  Database.courses = courses.filter((course) => course._id !== courseId);
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
);}

// finds all the courses for the given userId
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}

// finds all the unenrolled courses for the given userId
export function findUnCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    !enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}

// takes the given course and adds it to the database
export function createCourse(course) {
  const newCourse = { ... course, _id: uuidv4()};
  Database.courses = [... Database.courses, newCourse];
  return newCourse;
}






