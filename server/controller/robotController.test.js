const Robot = require("../../database/models/robot");
const {
  getRobot,
  getRobotById,
  createRobot,
  deleteRobot,
  updateRobot,
} = require("./robotController");

jest.mock("../../database/models/robot");

describe("Given getRobot function", () => {
  describe("When it receives an object res", () => {
    test("Then it should invoke the method json", async () => {
      const robots = [
        {
          _id: "6185c1ad9f1964f08e62d12f",
          name: "robot-1",
          image: "imageofrobot-1",
          speed: 5,
          resiliency: 5,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
        {
          _id: "6185c1af9f1964f08e62d131",
          name: "robot-2",
          image: "imageofrobot-2",
          speed: 7,
          resiliency: 2,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
        {
          _id: "6185cf5b300bda26cb1982b9",
          name: "robot-3",
          image: "imageofrobot-3",
          speed: 2,
          resiliency: 9,
          creationDate: "2021-11-15T02:24:00.000Z",
          __v: 0,
        },
      ];
      Robot.find = jest.fn().mockResolvedValue(robots);
      const res = {
        json: jest.fn(),
      };

      await getRobot(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(robots);
    });
  });
});

describe("Given getRobotById function", () => {
  describe("When it receives a request with id 6185c, a res object and a next function", () => {
    test("Then it should invoke Robot.findById with an id 6185", async () => {
      Robot.findById = jest.fn().mockResolvedValue({});
      const idRobot = 6185;
      const req = {
        params: {
          idRobot,
        },
      };
      const res = {
        json: () => {},
      };
      const next = () => {};

      await getRobotById(req, res, next);

      expect(Robot.findById).toHaveBeenCalledWith(idRobot);
    });
  });

  describe("And Robot.findById rejects", () => {
    test("Then it should invoke next function with the error rejected", async () => {
      const error = {};
      Robot.findById = jest.fn().mockRejectedValue(error);
      const req = {
        params: {
          idRobot: 0,
        },
      };
      const res = {};
      const next = jest.fn();

      await getRobotById(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("And Robot.findById resolves to robot", () => {
    test("Then it should invoke res.json with robot", async () => {
      const idRobot = "6185c1ad9f1964f08e62d12f";
      const robot = {
        _id: "6185c1ad9f1964f08e62d12f",
        name: "robot-1",
        image: "imageofrobot-1",
        speed: 5,
        resiliency: 5,
        creationDate: "2021-11-15T02:24:00.000Z",
        __v: 0,
      };
      Robot.findById = jest.fn().mockResolvedValue(robot);
      const req = {
        params: {
          idRobot,
        },
      };
      const res = {
        json: jest.fn(),
      };

      await getRobotById(req, res);

      expect(res.json).toHaveBeenCalledWith(robot);
    });
  });
});

describe("Given a createRobot function", () => {
  describe("When it receives a request with an object robot", () => {
    test("Then it should invoke Robot.create with a robot", async () => {
      Robot.create = jest.fn().mockResolvedValue({});
      const robot = {
        name: "robot-x",
        image: "imageofrobot-x.jpeg",
        speed: 5,
        resiliency: 5,
        creationDate: "2021-11-15T02:24:00.000Z",
      };
      const req = {
        body: robot,
      };
      const res = {
        json: () => {},
      };
      const next = () => {};

      await createRobot(req, res, next);

      expect(Robot.create).toHaveBeenCalledWith(robot);
    });
  });
  describe("And Robot.create rejects", () => {
    test("Then it should invoke next function with the error rejected", async () => {
      const error = {};
      Robot.create = jest.fn().mockRejectedValue(error);
      const req = {
        params: {
          idRobot: 0,
        },
      };
      const res = {};
      const next = jest.fn();

      await createRobot(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});

describe("Given a deleteRobot function", () => {
  describe("When it receives a request with an idRobot", () => {
    test("Then it should invoke a Robot.findByIdAndRemove with the idRobot", async () => {
      Robot.findByIdAndRemove = jest.fn().mockResolvedValue({});
      const idRobot = 66;
      const req = {
        params: {
          idRobot,
        },
      };
      const res = {
        json: () => {},
      };
      const next = () => {};

      await deleteRobot(req, res, next);

      expect(Robot.findByIdAndRemove).toHaveBeenCalledWith(idRobot);
    });
  });
});

describe("Given an updateRobot function", () => {
  describe("When it receives a request with a robot", () => {
    test("Then it should invoke Robot.findOneAndUpdate with the idRobot and robot", async () => {
      const robot = {
        _id: "6185c1af9f1964f08e62d131",
        name: "robot-1",
        image: "imageofrobot-1",
        speed: 5,
        resiliency: 5,
        creationDate: "2021-11-15T02:24:00.000Z",
      };
      // eslint-disable-next-line no-underscore-dangle
      const req = {
        body: robot,
      };
      const { _id } = req.body;
      const res = {
        json: jest.fn(),
      };

      Robot.findOneAndUpdate = jest.fn().mockResolvedValue({});
      await updateRobot(req, res, null);

      expect(Robot.findOneAndUpdate).toHaveBeenCalledWith(_id, robot);
    });
  });
});
