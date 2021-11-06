const chalk = require("chalk");
const debug = require("debug")("robots:server");
const express = require("express");
const morgan = require("morgan");
const { notFoundErrorHandler, generalErrorHandler } = require("./error");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellow(`Server is listening on port number: ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("There was an error starting the server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`The port ${port} is in use.`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  debug("I´m a second middleware");
  next();
});

app.use(notFoundErrorHandler);
app.use(generalErrorHandler);

module.exports = initializeServer;