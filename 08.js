function restaurante() {
    console.log("Bem-vindo ao restaurante!");
    console.log("Menu:");
    console.log("1 - Pizza: R$ 35,00 - massa fina, molho de tomate e queijo artesanal.");
    console.log("2 - Hambúrguer: R$ 25,00 - pão artesanal, carne grelhada e acompanhamentos.");
    console.log("3 - Salada: R$ 20,00 - mix de folhas, legumes frescos e molho especial.");
    console.log("4 - Macarrão: R$ 30,00 - massa fresca com molho à sua escolha.");
    
    // Solicitar a entrada do usuário
    let escolha = parseInt(prompt("Escolha um prato (1-4):"));
    
    // Estrutura switch para tratar a escolha
    switch (escolha) {
        case 1:
            console.log("\nVocê escolheu pizza.");
            console.log("Descrição: massa fina, molho de tomate e queijo artesanal.");
            console.log("Preço: R$ 35,00");
            break;
        case 2:
            console.log("\nVocê escolheu hambúrguer.");
            console.log("Descrição: pão artesanal, carne grelhada e acompanhamentos.");
            console.log("Preço: R$ 25,00");
            break;
        case 3:
            console.log("\nVocê escolheu salada.");
            console.log("Descrição: mix de folhas, legumes frescos e molho especial.");
            console.log("Preço: R$ 20,00");
            break;
        case 4:
            console.log("\nVocê escolheu macarrão.");
            console.log("Descrição: massa fresca com molho à sua escolha.");
            console.log("Preço: R$ 30,00");
            break;
        default:
            console.log("\nOpção inválida! Por favor, escolha um prato do menu.");
    }
}

restaurante();

    