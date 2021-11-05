const debug = require("debug")("robots:database");

const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDB = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGODB_ROBOTS, (error) => {
      if (error) {
        debug(chalk.red("Failed to connect to the database"));
        debug(chalk.red(error.message));
        reject();
        return;
      }
      debug(chalk.green("Connected to the database"));
      resolve();
    });
  });

module.exports = connectDB;
