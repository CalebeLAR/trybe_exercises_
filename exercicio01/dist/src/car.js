"use strict";
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    // Deve conter um método chamado honk que aciona a buzina do carro.
    honk() {
        console.log('honk');
    }
    turnOff() { }
    speedUp() { }
    speedDown() { }
    stop() { }
    turn(direction) {
        console.log(direction);
    }
}
const car = new Car('ferrari', 'red', 2);
car.honk();
car.turn('direita');
