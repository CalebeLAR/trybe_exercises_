class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand:string, color:string, doors:number){
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk() {console.log('buzina') }
  turnOn() {console.log('ligado') }
  turnOff() {console.log('desligado') }
  speedUp() {console.log('acela') }
  speedDown() {console.log('reduz') }
  stop() {console.log('para') }
  turn(direction:string) {console.log(`vira à ${direction}`) }
}

const palioFirePrata = new Car('fiat', 'prata', 4);
palioFirePrata.turnOn();
palioFirePrata.turn('direita');