//solicitar as trés notas ao usuário
let nota1 = parseInt(prompt("Digite o primeiro número:"));
let nota2 = parseInt(prompt("Digite o segundo número:"));
let nota3 = parseInt(prompt("Digite o terceiro número:"));
let maior;
if (nota1 >= nota2 && nota1 >= nota3) {
    maior = nota1;
} else if (nota2 >= nota1 && nota2 >= nota3) {
    maior = nota2;
} else {
    maior = nota3;
}
console.log("O maior número é " + maior);

 
