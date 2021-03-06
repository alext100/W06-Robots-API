const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
