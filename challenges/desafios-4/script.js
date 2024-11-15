// Desafio 1
console.log("Bem-vindo!");

// Desafio 2
let name1 = "Victor";

console.log(`Olá, ${name1}!`);

// Desafio 3
let name2 = "Victor";

alert(`Olá, ${name2}!`);

// Desafio 4
let bestProgrammingLanguage = prompt("Qual a linguagem de programação preferida?");

// Desafio 5
let value1 = parseInt(prompt("Escolha um número:"));
let value2 = parseInt(prompt("Escolha outro número:"));

let result = value1 + value2;

console.log(`A soma de ${value1} e ${value2} é igual a ${result}.`);

// Desafio 6
let value3 = parseInt(prompt("Escolha um número:"));
let value4 = parseInt(prompt("Escolha outro número:"));

let result2 = value3 - value4;

console.log(`A diferença entre ${value3} e ${value4} é igual a ${result2}.`);

// Desafio 7
let age = prompt("Infome uma idade:");

console.log(age >= 18 ? "Maior de idade." : "Menor de idade.");

// Desafio 8
let number = prompt("Digite um número:");

console.log(number >= 0 ? "Positivo" : "Negativo");

// Desafio 9
let count = 1;

while(count <= 10) {
    console.log(`Loop de número ${count}.`);

    count++;
}

// Desafio 10
let score = prompt("Informe uma nota de prova de 0 a 10.");

alert(score >= 7 ? "Aprovado." : "Reprovado");

// Desafio 11
console.log(Math.random());

// Desafio 12
console.log(parseInt(Math.random() * 10 + 1));

// Desafio 13
console.log(parseInt(Math.random() * 1000 + 1));