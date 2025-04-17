import Database from "../Database/index.js" // gives access to the database
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

// Gets the modules from the database
export function findAllAssignments() {
  return model.find();
}

// returns all assignments for the given course id
export function findAllAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
  //const { assignments } = Database;
  //const assignmentsForCourse = assignments.filter(
  //  (assignment) => assignment.course === courseId);
    
  //return assignmentsForCourse;
}

export function createAssignment( assignment, courseId) {
  const newAssignment = {...assignment, _id: uuidv4()};
  return model.create(newAssignment);
  //Database.assignments = [... Database.assignments, newAssignment];
  
  //return newAssignment;
}

export function updateAssignment( assignmentId, assignmentUpdates) {
  return model.updateOne({_id: assignmentId}, assignmentUpdates);
  //const { assignments } = Database;
  //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  //Object.assign(assignment, assignmentUpdates);
  //return assignment;
}

export function deleteAssignment( assignmentId ) {
  return model.deleteOne({_id: assignmentId});
  //const { assignments } = Database;
  //Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

