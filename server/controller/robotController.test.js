const Robot = require("../../database/models/robot");
const { getRobot } = require("./robotController");

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
