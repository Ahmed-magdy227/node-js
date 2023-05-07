const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 8,
    maxLength: 20,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
