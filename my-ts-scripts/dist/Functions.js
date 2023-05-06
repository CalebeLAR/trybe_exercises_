console.log(`
  ---------------------Função 01---------------------`);
const numberInput = 3;
const isItAPrime = (param) => {
    for (let i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
};
isItAPrime(numberInput)
    ? console.log(`${numberInput} é primo`)
    : console.log(`${numberInput} não é primo`);
console.log(`----------------------------------------`);
let s = ''
for (let i=0; i<=10; i++) {
    s += `function0${i}.ts ` 
}
console.log(s);
function01
function02
function03
function04
function05
function06
function07
function08
function09
function010