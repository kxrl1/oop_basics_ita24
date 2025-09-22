const Person = require('./person.js')
const bob = new Person('Bob')
const brian = new Person('Brian')
const alice = new Person('Alice')

bob.setAge(15)
bob.setWeight(60)
bob.setHeight(1.7)

brian.setAge(20)
brian.setWeight(80)
brian.setHeight(1.8)

alice.setAge(17)
alice.setWeight(50)
alice.setHeight(1.6)

const persons = [bob, brian, alice]

persons.forEach(person => {
    person.printPerson()
    console.log("BMI: " + person.getBMI())
    if (person.isAdult()) {
        console.log(person.getName() + ' is adult')    
    } else {
        console.log(person.getName() + ' is not adult')
    }
    console.log("------")
})

