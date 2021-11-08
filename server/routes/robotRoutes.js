const express = require("express");
const {
  getRobot,
  createRobot,
  getRobotById,
  deleteRobot,
  updateRobot,
} = require("../controller/robotController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getRobot);

router.get("/:idRobot", getRobotById);

router.post("/create", auth, createRobot); // checkToken

router.delete("/delete/:idRobot", auth, deleteRobot);

router.put("/update", auth, updateRobot);

module.exports = router;
