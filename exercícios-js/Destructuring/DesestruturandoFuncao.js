// possibilidade de utilização de estrutura de destructuring dentro de parâmetro de função

const bruno = { name: 'bruno', height: 1.88, weight: 96 };

function imc({ height = 1, weight = 1 }) {
  return weight / Math.pow(height, 2);
}

console.log(imc(bruno));
