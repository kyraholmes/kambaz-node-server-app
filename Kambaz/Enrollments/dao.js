import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


// enrolls the given user into the given course
export function enrollUserInCourse(userrId, courseId) {
  const { enrollments } = Database;
  enrollments.push({_id: uuidv4(), user: userrId, course: courseId})
}

