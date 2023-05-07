const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    minLength: 4,
    maxLength: 12,
    // unique: true,
    // required: true,
    default: "my todo",
  },
});
const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
