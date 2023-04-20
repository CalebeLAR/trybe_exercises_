class Car {
  brand: string;
  color: string; 
  doors: number;
  
  constructor(brand: string, color: string, doors: number) {
      this.brand  = brand;
      this.color  = color;
      this.doors  = doors;
  }
  // Deve conter um método chamado honk que aciona a buzina do carro.
  honk(): void {
    console.log('honk')
  }
  turnOff(): void {}
  speedUp(): void {}
  speedDown(): void {}
  stop(): void {}
  turn(direction: string): void {
    console.log(direction)
  }
}

const car = new Car('ferrari', 'red', 2);
car.honk();
car.turn('direita');
