let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("digite o segundo número"));

//verificar se pelomenos número é multiplo do outro
if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log("pelo menos um dos números mútiplo do outro");
     } else { 
        console.log("nenhum dos números é múltilo do outro");
}