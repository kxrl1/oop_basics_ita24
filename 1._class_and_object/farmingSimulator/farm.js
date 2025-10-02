const BulkTank = require('./bulkTank.js')
const Cow = require('./Cow.js')

const tank = new BulkTank();
tank.getFromTank(100);
tank.addToTank(25);
tank.getFromTank(5);
tank.print();

const tank2 = new BulkTank(50);
tank2.addToTank(100);
tank2.print();

const cow = new Cow();
console.log(cow.print())

cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.liveHour();
console.log(cow.print())

cow.milk();
console.log(cow.print())
console.log()

const cow1 = new Cow("Ammu");
console.log(cow1.print())
cow1.liveHour();
cow1.liveHour();
cow1.print();
cow1.milk();
console.log(cow1.print())

