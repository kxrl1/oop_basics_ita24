class Person {
    #name = ""
    #age = 0
    #weight = 0
    #height = 0

    constructor(name) {
        this.#name = name
    }

    // Vanus

    becomeOlder() {
        this.#age++
    }

    isAdult() {
        return this.#age >= 18
    }

    setAge(age) {
        this.#age = age
    }

    getAge() {
        return this.#age
    }

    // Nimi

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    // Kaal

    setWeight(weight) {
        if (weight > 0) {
            this.#weight = weight
        } else {
            console.log("Kaal peab olema suurem kui 0!")
        }
    }

    getWeight() {
        return this.#weight
    }

    moreWeighted() {
        this.#weight++
    }

    // Pikkus

    setHeight(height) {
        if (height > 0) {
            this.#height = height
        } else {
            console.log("Pikkus peab olema suurem kui 0!")
        }
    }

    getHeight() {
        return this.#height
    }

    // BMI arvutamine

    getBMI() {
        if (this.#height > 0 && this.#weight > 0) {
            let bmi = this.#weight / (this.#height * this.#height)
            return Number(bmi.toFixed(2))
        } else {
            console.log("BMI arvutamiseks peab olema määratud positiivne kaal ja pikkus!")
            return null
        }
    }

    // Inimese info
    
    printPerson() {
        console.log(
            this.#name + ', age ' + this.#age + ' years, ' +
            'weight: ' + this.#weight + ' kg, ' +
            'height: ' + this.#height + ' m'
        )
    }
}

module.exports = Person