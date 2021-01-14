// desestruturando criando variáveis de mesmo nome das propriedades dos objetos

let exemplo = { name: 'bruno', age: 30 };
const { name, age } = exemplo;

let testando = name;

console.log(name, age, testando);

// desestruturando criando variáveis de outros nomeslet exemplo = { name: 'bruno', age: 30 };

const { name: nameTest, age: ageTest } = exemplo;

let testando2 = nameTest;

console.log(nameTest, ageTest, testando2);

// desestruturando arrays

const example = [1, 2, 3, 4];
const [n1, n2, n3] = example;
console.log(n1, n2, n3);
