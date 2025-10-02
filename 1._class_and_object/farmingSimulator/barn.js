class Barn {
  constructor(tank) {
    this.tank = tank;
    this.robot = null;
  }

  getBulkTank() {
    return this.tank;
  }

  installMilkingRobot(robot) {
    this.robot = robot;
    this.robot.setBulkTank(this.tank);
  }

  takeCareOf(cows) {
    if (!this.robot) {
      throw new Error("No MilkingRobot installed");
    }

    if (Array.isArray(cows)) {
      for (const cow of cows) {
        this.robot.milk(cow);
      }
    } else {
      this.robot.milk(cows);
    }
  }

  print() {
    return this.tank.print();
  }
}

module.exports = Barn;