// Desafio 1
diaDaSemana = prompt("Qual é o dia da semana?");
console.log(diaDaSemana);

diaDaSemana = diaDaSemana.toLowerCase();
diaDaSemana = diaDaSemana.normalize("NFD").replace(/\p{Diacritic}/gu, "");
console.log(diaDaSemana);

if (diaDaSemana == "sabado" || diaDaSemana == "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// Desafio 2
alert(diaDaSemana >= 0 ? "Número positivo." : "Número negativo.");

let pontuação = Math.floor(Math.random() * 200);

// Desafio 3
alert(pontuação >= 100 ? "Parabéns, você venceu!" : "Tente novamente para ganhar.");

// Desafio 4
let saldo = 1000.22;

alert(`Seu saldo é de: R$ ${saldo}`);

// Desafio 5
alert(`Boas vindas, ${prompt('Digite seu nome:')}!`);