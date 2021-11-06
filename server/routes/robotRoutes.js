const express = require("express");
const {
  getRobot,
  createRobot,
  getRobotById,
  deleteRobot,
  updateRobot,
  checkToken,
} = require("../controller/robotController");

const router = express.Router();

router.get("/robots", getRobot);

router.get("/robots/:idRobot", getRobotById);

router.post("/robots/create", checkToken, createRobot);

router.delete("/robots/delete/:idRobot", checkToken, deleteRobot);

router.put("/robots/update", checkToken, updateRobot);

module.exports = router;
