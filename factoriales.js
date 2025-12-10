const prompt = require ('prompt-sync')();
let n = Number(prompt("Digita el numero que quieres validar: "))
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(n)); 
