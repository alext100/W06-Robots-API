const express = require("express");
const { validate } = require("express-validation");
const {
  getRobot,
  createRobot,
  getRobotById,
  deleteRobot,
  updateRobot,
} = require("../controller/robotController");
const auth = require("../middlewares/auth");
const {
  robotRequestSchema,
} = require("../../database/models/robotRequestSchema");

const router = express.Router();

router.get("/", getRobot);

router.get("/:idRobot", getRobotById);

router.post("/create", validate(robotRequestSchema), auth, createRobot);

router.delete("/delete/:idRobot", auth, deleteRobot);

router.put("/update", validate(robotRequestSchema), auth, updateRobot);

module.exports = router;
