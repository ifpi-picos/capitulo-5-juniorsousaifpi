//solicite ao usuario que insira trés numeros
let num1 = parseInt(prompt("digite o primeiro numero:"))
let num2 = parseInt(prompt("digite o segundo numer: "))
let num3 = parseInt(prompt("digite o terceiro numero"))
 
let maior 
if (num1 > num2 && num1 > num3){
    maior = num1
} else if (num2 > num1 && num2 > num3){
    maior = num2
}else{
    maior = num3
}
console.log (" o maior numero é :", maior)