alert('Boas vindas ao jogo dos números secreto!');
console.log('Mensagem de boas vindas exibida.');

let valorMaximo = 10000;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(`O número secreto é ${numeroSecreto}.`); // O uso de acrase para a concatenação se chama "Template Strings".

let chute = -1;

let tentativas = 0;

while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${valorMaximo}.`);
    console.log(`Chute realizado, o número escolhido foi ${chute}.`);
    tentativas++;
    console.log(`Tentativa de nº ${tentativas}`);

    // se chute for igual ao número secreto
    if(chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} na ${tentativas}º tentativa!`);
    } else {
        alert(chute > numeroSecreto ? `O número secreto é menor que ${chute}.` : `O número secreto é maior que ${chute}.`); // A condicional utilizada aqui se chama Operador Ternário.
    }
}