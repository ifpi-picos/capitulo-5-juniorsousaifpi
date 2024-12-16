let escolha = Number(prompt("Digite 1 para converter de Celsius para Fahrenheit ou 2 para Fahrenheit para Celsius:")); 
let temperatura = Number(prompt("Digite a temperatura:")); 
if (escolha === 1) { alert(`A temperatura em Fahrenheit é: 
    ${(temperatura * 9 / 5 + 32).toFixed(2)}`);
 } else if (escolha === 2) { alert(`A temperatura em Celsius é:
 ${((temperatura - 32) * 5 / 9).toFixed(2)}`); }
  else { alert("Opção inválida!");
    
   }