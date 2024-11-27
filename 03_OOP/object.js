Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

  showAll(hh, mm, ss) {
        alert(`Time: ${hh}:${mm}:${ss}` );
    },
    addSecond(hh, mm, ss)
    {
        ss++;
        if (ss >= 60) {
            ss = 0;
            mm++;
            if (mm >= 60) {
                mm = 0;
                hh++;
                if (hh >= 24) {
                    hh = 0;
                }
            }
        }return { hh, mm, ss }
    },


    removeSecond(hh, mm, ss)
    {
        ss--;
        if (ss < 0) {
            ss = 59;
            mm--;
            if (mm <0) {
                mm = 59;
                hh--;
                if (hh <0 ) {
                    hh = 23;
                }
            }
        }return { hh, mm, ss }
    }

}
Time.showAll(13, 21, 30);
Time.addSecond(12, 38, 59);
Time.removeSecond(13, 12, 60);


let car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    avgSpeed: 80, 

    
    displayInfo: function () {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average Speed: ${this.avgSpeed} km/h`);
    },

    
    calculateTravelTime: function (distance) {
        let travelTime = distance / this.avgSpeed; 
        let breaks = Math.floor(travelTime / 4); 
        let totalTime = travelTime + breaks; 
        return totalTime;
    }
};


car.displayInfo();

let distance = 500; 
let totalTime = car.calculateTravelTime(distance);
console.log(`Time needed to travel ${distance} km: ${totalTime.toFixed(2)} hours`);
