const Robot = require("../../database/models/robot");

const getRobot = async (req, res) => {
  const robots = await Robot.find();
  res.json(robots);
};

const getRobotById = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const searchedRobot = await Robot.findById(idRobot);
    if (searchedRobot) {
      res.json(searchedRobot);
    } else {
      const error = new Error("Robot not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const createRobot = async (req, res, next) => {
  try {
    const robot = req.body;
    const newRobot = await Robot.create(robot);
    res.json(newRobot);
  } catch (error) {
    error.code = 400;
    error.message = "Error on create new robot!";
    next(error);
  }
};

const deleteRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robotToDelete = await Robot.findByIdAndRemove(idRobot);
    res.json(robotToDelete);
  } catch (error) {
    error.code = 500;
    error.message = "Error on delete Robot";
    next(error);
  }
};

const updateRobot = async (req, res, next) => {
  try {
    const robot = req.body;
    const { idRobot } = req.body;
    const newRobot = await Robot.findOneAndUpdate(idRobot, robot);
    res.json(newRobot);
  } catch (error) {
    error.code = 400;
    error.message = "Error on update the robot!";
    next(error);
  }
};

module.exports = {
  getRobot,
  createRobot,
  getRobotById,
  deleteRobot,
  updateRobot,
};
