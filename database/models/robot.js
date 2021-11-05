const { Schema, model } = require("mongoose");

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  resiliency: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  creationDate: {
    type: Date,
    required: true,
  },
});

const Robot = model("Robot", robotSchema);

module.exports = Robot;
