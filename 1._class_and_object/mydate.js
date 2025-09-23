class myDate{ 

    constructor(day, month, year){
        this.#day = day;
        this.#month = month;
        this.#year = year;

        const validation = this.isValid()
        if (validation.valid === false) {
            console.log(validation.error)
        } 
    } 

    #day = 0;
    #month = 0;
    #year = 0;

    //Days

    setDay(day) {
        this.#day = day;
        this.isValid();
    }  

    getDay() {
        return this.#day
    } 

    //Months

    setMonth(month) {
        this.#month = month;
        this.isValid();
    } 

    getMonth() {
        return this.#month
    } 

    //Years

    setYear(year){
        this.#year = year;
        this.isValid();
    } 

    getYear() {
        return this.#year
    } 

    printDay() {
        console.log(this.#day + ' day, ' + this.#month + ' month, ' + this.#year + ' year')
    } 

    //Earier comparing

    earlier(compared) {
        if (this.#year < compared.#year) return true;
        if (this.#year > compared.#year) return false;

        if (this.#month < compared.#month) return true;
        if (this.#month > compared.#month) return false;

        return this.#day < compared.#day;
    }

    //

    #daysInMonth(month, year) {
        switch (month) {
            case 2: return 28;
            case 4: case 6: case 9: case 11: return 30;
            default: return 31;
        }
    }

    //isValid

    isValid() {
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
            console.log("Viga: päev, kuu ja aasta peavad olema täisarvud.");
            return false;
        }

        if (this.#month < 1 || this.#month > 12) {
            console.log("Viga: kuu peab olema 1 kuni 12.");
            return false;
        }

        const daysLenght = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const maxDays = daysLenght[this.#month - 1];

        if (this.#day < 1 || this.#day > maxDays) {
            console.log(`Viga: kuus ${this.#month} saab olla päev 1 kuni ${maxDays}.`);
            return false;
        }

        return true;
    }
}

module.exports = myDate