class Person {
    #name = ""
    #age = 0

    constructor(name) {
        this.#name = name
    }

    becomeOlder() {
        this.#age++
    }

    isAdult() {
        if (this.#age < 18) {
            return false
        }
        return true
    }

    printPerson() {
        console.log(this.#name + ', age ' + this.#age + ' years')
    }

    setName() {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setAge(age) {
        this.#age = age
    }

    getAge() {
        return this.#age
    }
} 

module.exports = Person