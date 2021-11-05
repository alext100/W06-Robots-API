const Robot = require("../../database/models/robot");

const getRobot = async (req, res) => {
  const robots = await Robot.find();
  res.json(robots);
};
