class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself() {
        console.log(`I am a ${this.description} with ${this.wheels} wheels.`);
    }
}

const coolSkiVan = new Vehicle("cool ski van", 4);

console.log(coolSkiVan);
console.log(coolSkiVan.describeYourself());