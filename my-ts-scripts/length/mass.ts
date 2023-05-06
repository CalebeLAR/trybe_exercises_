/*
Exercício 3

Crie um script para converter unidades de medida de massa:
Esse script deverá se chamar mass.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
    valor - number
    unidade base - string
    unidade para a conversão - string
*/

const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsMass.indexOf(fromUnit);
  const toIndex = unitsMass.indexOf(toUnit);
  const exponent = Math.abs(toIndex - fromIndex);
  return value * Math.pow(10, exponent);
}