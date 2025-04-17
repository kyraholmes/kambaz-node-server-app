import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("AssignmentsModule", schema);

export default model;