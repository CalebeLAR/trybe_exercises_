type Slices468  = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices468;
}

interface PizzaComum {
  flavors: 'calabresa'|'frango'|'pepperoni',
  slices: Slices468;
}

interface PizzaVegetariana {
  flavors: 'marguerita'|'palmito'|'cogumelo' 
  slices: Slices468;

}
interface PizzaDoce {
  flavors: 'nutella'|'goiabada com queijo'|'marshmallow';
  slices: 4;
}

const pizzaCalabresa:Pizza = {
  flavor: 'calabresa',
  slices: 8,
}
const pizzaMargarida:Pizza = {
  flavor: 'margarida',
  slices: 6,
}
const pizzaNutella:Pizza = {
  flavor: 'Nutella',
  slices: 4,
}

const pizzaComumCalabresa:PizzaComum = {flavors: "calabresa", slices: 6}
const pizzaComumFrango:PizzaComum  = {flavors: "frango", slices: 4}
const pizzaComumPepperoni:PizzaComum  ={flavors: "pepperoni", slices: 8}

const pizzaVegetarianaMarguerita:PizzaVegetariana  ={flavors: "marguerita", slices: 8}
const pizzaVegetarianaPalmito:PizzaVegetariana  ={flavors: "palmito", slices: 6}

const pizzaDoceNutella:PizzaDoce = {flavors: "goiabada com queijo", slices: 4}



console.log({
  pizzasComuns: {
    pizzaComumCalabresa,
    pizzaComumFrango,
    pizzaComumPepperoni
  },
  pizzasVegetarianas: {
    pizzaVegetarianaMarguerita,
    pizzaVegetarianaPalmito
  },
  pizzasDoces: {
    pizzaDoceNutella,
  }
})