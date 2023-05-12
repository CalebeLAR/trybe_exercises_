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
  speedUp() {console.log('acelera') }
  speedDown() {console.log('reduz') }
  stop() {console.log('para') }
  turn(direction:string) {console.log(`vira à ${direction}`) }
}

const volkswagenGolPrata4Portas = new Car('volkswagen', 'prata', 4);
volkswagenGolPrata4Portas.turnOn(); 
volkswagenGolPrata4Portas.speedUp();
volkswagenGolPrata4Portas.speedDown()
volkswagenGolPrata4Portas.turn('esquerda')
volkswagenGolPrata4Portas.speedUp()
volkswagenGolPrata4Portas.speedDown()
volkswagenGolPrata4Portas.turn('direita');
volkswagenGolPrata4Portas.speedUp();
volkswagenGolPrata4Portas.speedDown()
volkswagenGolPrata4Portas.turn('direita')
volkswagenGolPrata4Portas.speedUp()
volkswagenGolPrata4Portas.speedDown()
volkswagenGolPrata4Portas.stop()
