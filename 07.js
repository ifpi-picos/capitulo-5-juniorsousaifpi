let lado1 = parseFloat(prompt("Lado 1:"));
let lado2 = parseFloat(prompt("Lado 2:"));
let lado3 = parseFloat(prompt("Lado 3:"));

// Verificar se é um triângulo válido
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        alert("Triângulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Triângulo isósceles");
    } else {
        alert("Triângulo escaleno");
    }
} else {
    alert("Não é um triângulo válido");
}
