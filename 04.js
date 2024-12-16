//função principal
function verificarMaioridade() {

    //solicitar o ano de nascimento ao usuario
    let anoNascimento =
    parseInt(prompt("Digite o ano do seu nascimento:"));
     //obtenha o ano atual
    let anoAtual = new
    Date().getFullYear();
    //calcula a idade
    let idade = anoAtual-anoNascimento;
    //verificar se e maior de idade
    if (idade >= 18) {
        alert("vocé e maior de idade,");
    } else{
        alert("voce e menor de idade.");
       }    
    }
    
    verificarMaioridade();