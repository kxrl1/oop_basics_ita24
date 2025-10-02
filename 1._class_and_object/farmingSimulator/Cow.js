const Milkable = require('./milkable')

class Cow extends Milkable {
  #name = ''
  #capacity = 0
  #amount = 0

  #NAMES = [
  "Anu", "Arpa", "Essi", "Heluna", "Hely",
  "Hento", "Hilke", "Hilsu", "Hymy", "Ihq", "Ilme", "Ilo",
  "Jaana", "Jami", "Jatta", "Laku", "Liekki",
  "Mainikki", "Mella", "Mimmi", "Naatti",
  "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
  "Rima", "Soma", "Sylkki", "Valpu", "Virpi"
  ]

  constructor(name = ''){
    super()
    if (name == '') {
      name = this.#name = this.#NAMES[Math.floor(Math.random() * this.#NAMES.length)] 
    } else{
      this.#name = name
    }
    this.#capacity = 15 + Math.floor(Math.random() * 26)
  }

  liveHour() {
    const porducedMilk = 0.7 + Math.random() * 1.3
    if(this.#amount + porducedMilk > this.#capacity) {
      this.#amount = this.#capacity
    } else{
      this.#amount += porducedMilk
    }
    console.log(this.#amount)
  }

  milk(){
    const cowsMilk = this.#amount
    this.#amount = 0
    return cowsMilk
  } 
    
  print(){
    return this.#name + ' ' + Math.ceil(this.#amount * 10) / 10 + '/' + this.#capacity
  } 
} 

module.exports = Cow