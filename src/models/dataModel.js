const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    hobbies: { type: [String], required: true },
  },
  { timestamps: true }
);

const DataModel = mongoose.model("User", DataSchema);

module.exports = DataModel;
