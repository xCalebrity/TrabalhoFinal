// Array para armazenar os doadores
const doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
    console.log("===== CADASTRO DE DOADOR =====");
    const nome = prompt("Nome: ");
    const idade = parseInt(prompt("Idade: "));
    const peso = parseFloat(prompt("Peso (kg): "));
    const tipoSanguineo = prompt("Tipo Sanguíneo: ");
    const dataUltimaDoacao = prompt("Data da Última Doação (dd/mm/aaaa): ");

    const doador = {
        nome,
        idade,
        peso,
        tipoSanguineo,
        dataUltimaDoacao
    };

    doadores.push(doador);
    console.log("Doador cadastrado com sucesso!\n");
}

// Função para listar todos os doadores
function listarDoadores() {
    console.log("--------------------");
    console.log("LISTAGEM DE DOADORES:");
    console.log("--------------------");
    
    if (doadores.length === 0) {
        console.log("Nenhum doador cadastrado.\n");
    } else {
        console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
        console.log("-----------------------------------------------------------------");
        
        for (const doador of doadores) {
            console.log(`${doador.nome.padEnd(16)}| ${doador.idade.toString().padEnd(6)}| ${doador.peso.toString().padEnd(5)}| ${doador.tipoSanguineo.padEnd(15)}| ${doador.dataUltimaDoacao}`);
        }
        
        console.log("-----------------------------------------------------------------\n");
    }
}

// Função para buscar doadores por tipo sanguíneo
function buscarTipoSangue() {
    console.log("===== BUSCA POR TIPO SANGUÍNEO =====");
    const tipoSanguineoBusca = prompt("Digite o tipo sanguíneo desejado: ");
    let encontrouDoador = false;

    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
    console.log("-----------------------------------------------------------------");

    for (const doador of doadores) {
        if (doador.tipoSanguineo === tipoSanguineoBusca) {
            console.log(`${doador.nome.padEnd(16)}| ${doador.idade.toString().padEnd(6)}| ${doador.peso.toString().padEnd(5)}| ${doador.tipoSanguineo.padEnd(15)}| ${doador.dataUltimaDoacao}`);
            encontrouDoador = true;
        }
    }

    if (!encontrouDoador) {
        console.log("Nenhum doador com o tipo sanguíneo desejado encontrado.\n");
    } else {
        console.log("-----------------------------------------------------------------\n");
    }
}

// Loop principal do programa
while (true) {
    const opcao = Number(
      prompt(`
      ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
      1. Cadastrar doador
      2. Listar doadores
      3. Buscar doador por tipo sanguíneo
      4. Buscar doador por data da última doação
      5. Sair
      Escolha uma opção:`)
    );
  
    switch (opcao) {
      case 1:
        cadastrarDoador()
        break;
      case 2:
        listarDoadores()
        break;
      case 3:
        buscarTipoSangue()
        break;
      case 4:
        buscarPorData()
        break;
      case 5:
        // Sair
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        menu();
    }
  }

  menu()    



