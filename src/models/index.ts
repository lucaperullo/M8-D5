import mongoose from "mongoose";
import accommodationsSchema from "./schema";
const { model } = mongoose;

export default model("accommodations", accommodationsSchema);
