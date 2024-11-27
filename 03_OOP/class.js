
const car = {
    manufacturer: "BMW",
    model: "M#",
    year: 2018,
    avgSpeed: 120, 

    
    displayInfo() {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average Speed: ${this.avgSpeed} km/h`);
    },

    calculateTravelTime(distance) {
        const travelTime = distance / this.avgSpeed; 
        const breaks = Math.floor(travelTime / 4); 
        return travelTime + breaks; 
    }
};

console.log("Car information:");
car.displayInfo();

const distance = 450; 
const totalTime = car.calculateTravelTime(distance);
console.log(`Time needed to travel ${distance} km: ${totalTime.toFixed(2)} hours`);


function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
}

const fraction = {
    numerator: 1, 
    denominator: 1, 

    add(other) {
        return {
            numerator: this.numerator * other.denominator + other.numerator * this.denominator,
            denominator: this.denominator * other.denominator,
        };
    },

    subtract(other) {
        return {
            numerator: this.numerator * other.denominator - other.numerator * this.denominator,
            denominator: this.denominator * other.denominator,
        };
    },

    multiply(other) {
        return {
            numerator: this.numerator * other.numerator,
            denominator: this.denominator * other.denominator,
        };
    },

    divide(other) {
        return {
            numerator: this.numerator * other.denominator,
            denominator: this.denominator * other.numerator,
        };
    },

    simplify() {
        const divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
        return this;
    },
};


const fraction1 = { numerator: 1, denominator: 2 };
const fraction2 = { numerator: 1, denominator: 3 };

function printFraction(f) {
    return `${f.numerator}/${f.denominator}`;
}

console.log("Addition:", printFraction(fraction.add.call(fraction1, fraction2)));
console.log("Subtraction:", printFraction(fraction.subtract.call(fraction1, fraction2)));
console.log("Multiplication:", printFraction(fraction.multiply.call(fraction1, fraction2)));
console.log("Division:", printFraction(fraction.divide.call(fraction1, fraction2)));

const result = { numerator: 8, denominator: 12 };
fraction.simplify.call(result);
console.log("Simplified:", printFraction(result));


const time = {
    hours: 0,  
    minutes: 0,  
    seconds: 0,  


    displayTime() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },

 
    changeSeconds(secondsToAdd) {
        this.seconds += secondsToAdd;
        
        if (this.seconds >= 60) {
            const extraMinutes = Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
            this.changeMinutes(extraMinutes); 
        } else if (this.seconds < 0) {
            const negativeMinutes = Math.ceil(this.seconds / 60);
            this.seconds = 60 + (this.seconds % 60);
            this.changeMinutes(negativeMinutes); 
        }
    },


    changeMinutes(minutesToAdd) {
        this.minutes += minutesToAdd;
       
        if (this.minutes >= 60) {
            const extraHours = Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
            this.changeHours(extraHours); 
        } else if (this.minutes < 0) {
            const negativeHours = Math.ceil(this.minutes / 60);
            this.minutes = 60 + (this.minutes % 60);
            this.changeHours(negativeHours); 
        }
    },


    changeHours(hoursToAdd) {
        this.hours += hoursToAdd;

        if (this.hours >= 24) {
            this.hours = this.hours % 24;
        } else if (this.hours < 0) {
            this.hours = 24 + (this.hours % 24);
        }
    }
};

const myTime = Object.create(time);
myTime.hours = 20;
myTime.minutes = 30;
myTime.seconds = 45;

console.log("Initial time:", myTime.displayTime()); 

myTime.changeSeconds(30);
console.log("Time after adding 30 seconds:", myTime.displayTime()); 

myTime.changeMinutes(45);
console.log("Time after adding 45 minutes:", myTime.displayTime()); 
myTime.changeHours(3);
console.log("Time after adding 3 hours:", myTime.displayTime()); 
myTime.changeMinutes(100);
console.log("Time after adding 100 minutes:", myTime.displayTime()); 


