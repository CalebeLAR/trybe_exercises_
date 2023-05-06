/**
Exercício 2
Crie um script para converter unidades de medida de comprimento:
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
  valor - number
  unidade base - string
  unidade para a conversão - string

  Tabela de conversão:
  Quilômetro 	km 	1000m
  Hectômetro 	hm 	100m
  Decâmetro 	dam 10m
  Metro 	    m 	1m
  Decímetro 	dm 	0,1m
  Centímetro 	cm 	0,01m
  Milímetro 	mm 	0,001m 
*/

const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertLength (value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsLength.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = unitsLength.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = Math.abs(toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
  return value * Math.pow(10, exponent);
};

