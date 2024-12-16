function calcularIMC() {
    // Solicitar altura e peso do usuário
    let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    let peso = parseFloat(prompt("Digite seu peso em kg (ex: 70):"));

    // Calcular o IMC
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Arredondar para duas casas decimais

    // Determinar a classificação do IMC
    let classificacao;
    switch (true) {
        case (imc < 18.5):
            classificacao = "Abaixo do peso";
            break;
        case (imc >= 18.5 && imc <= 24.9):
            classificacao = "Peso normal";
            break;
        case (imc >= 25 && imc <= 29.9):
            classificacao = "Sobrepeso";
            break;
        case (imc >= 30):
            classificacao = "Obesidade";
            break;
        default:
            classificacao = "Valor inválido";
    }

    // Exibir o IMC e a classificação
    alert(`Seu IMC é ${imc}. Classificação: ${classificacao}`);
}

// Chamar a função para execução
calcularIMC();
