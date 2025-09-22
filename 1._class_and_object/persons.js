const Person = require('./person.js')
const bob = new Person('Bob')
const brian = new Person('Brian')
const alice = new Person('Alice')

const persons = [bob, brian, alice]

while (bob.getAge() < 15)  {
    bob.becomeOlder()
}

for (let i = 0; i < 20; i++) {
    brian.becomeOlder()
}

bob.printPerson()
brian.printPerson()
alice.printPerson()

persons.forEach(person => {
    if (person.isAdult()) {
        console.log(person.getName() + ' is adult')    
    } else {
        console.log(person.getName() + ' is not adult')
    }
})

