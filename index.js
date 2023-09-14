// Array para armazenar os doadores
const doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
    alert("===== CADASTRO DE DOADOR =====")
    const nome = prompt("Nome: ")
    const idade = parseInt(prompt("Idade: "))
    const peso = parseFloat(prompt("Peso (kg): "))
    const tipoSanguineo = prompt("Tipo Sanguíneo: ").toLowerCase()
    const dataUltimaDoacao = prompt("Data da Última Doação (dd/mm/aaaa): ")

    const doador = {
        nome,
        idade,
        peso,
        tipoSanguineo,
        dataUltimaDoacao
    };

    doadores.push(doador)
    alert("Doador cadastrado com sucesso!\n")
}

// Função para listar todos os doadores
function listarDoadores() {
    let mensagem = "------------------------\n"
    mensagem += "LISTAGEM DE DOADORES:\n"
    mensagem += "------------------------\n"

    if (doadores.length === 0) {
        mensagem += "Nenhum doador cadastrado.\n"
    } else {
        mensagem += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n"
        mensagem += "-----------------------------------------------------------------\n"

        for (const doador of doadores) {
            mensagem += `${doador.nome.padEnd(16)}| ${doador.idade.toString().padEnd(6)}| ${doador.peso.toString().padEnd(5)}| ${doador.tipoSanguineo.padEnd(15)}| ${doador.dataUltimaDoacao}\n`
        }

        mensagem += "-----------------------------------------------------------------\n"
    }

    alert(mensagem)
}

// Função para buscar doadores por tipo sanguíneo
function buscarTipoSangue() {
    alert("===== BUSCA POR TIPO SANGUÍNEO =====")
    const tipoSanguineoBusca = prompt("Digite o tipo sanguíneo desejado: ").toLowerCase()
    let encontrouDoador = false

    let mensagem = "------------------------\n"
    mensagem += "RESULTADO DA BUSCA:\n"
    mensagem += "------------------------\n"
    mensagem += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n"
    mensagem += "-----------------------------------------------------------------\n"

    for (const doador of doadores) {
        if (doador.tipoSanguineo === tipoSanguineoBusca) {
            mensagem += `${doador.nome.padEnd(16)}| ${doador.idade.toString().padEnd(6)}| ${doador.peso.toString().padEnd(5)}| ${doador.tipoSanguineo.padEnd(15)}| ${doador.dataUltimaDoacao}\n`
            encontrouDoador = true
        }
    }

    if (!encontrouDoador) {
        mensagem += "Nenhum doador com o tipo sanguíneo desejado encontrado.\n"
    } else {
        mensagem += "-----------------------------------------------------------------\n"
    }

    alert(mensagem)
}

// Função para buscar doadores por data da última doação
function buscarPorData() {
    alert("===== BUSCA POR DATA DA ÚLTIMA DOAÇÃO =====")
    const dataBusca = prompt("Digite a data desejada (dd/mm/aaaa): ")
    let encontrouDoador = false

    let mensagem = "------------------------\n"
    mensagem += "RESULTADO DA BUSCA:\n"
    mensagem += "------------------------\n"
    mensagem += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n"
    mensagem += "-----------------------------------------------------------------\n"

    for (const doador of doadores) {
        if (doador.dataUltimaDoacao === dataBusca) {
            mensagem += `${doador.nome.padEnd(16)}| ${doador.idade.toString().padEnd(6)}| ${doador.peso.toString().padEnd(5)}| ${doador.tipoSanguineo.padEnd(15)}| ${doador.dataUltimaDoacao}\n`
            encontrouDoador = true
        }
    }

    if (!encontrouDoador) {
        mensagem += "Nenhum doador com a data de última doação desejada encontrado.\n"
    } else {
        mensagem += "-----------------------------------------------------------------\n"
   

  }
  alert(mensagem)
}

// Loop principal do programa
function menu() {
  while(true){
    const opcao = Number(
      prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
      1. Cadastrar doador
      2. Listar doadores
      3. Buscar doador por tipo sanguíneo
      4. Buscar doador por data da última doação
      5. Sair
      Escolha uma opção:`)
    )
  
    switch (opcao) {
      case 1:
        cadastrarDoador()
        break
      case 2:
        listarDoadores()
        break
      case 3:
        buscarTipoSangue()
        break
      case 4:
        buscarPorData()
        break
      case 5:
        // Sair
        break
      default:
        alert("Opção inválida. Tente novamente.")
    }
  }
}
  menu()