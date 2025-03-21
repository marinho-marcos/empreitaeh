import { carregarClientes } from "./funcoes.js";

let clientes = [
    {
        nome: 'João',
        email: 'jm123@gmail.com',
        cpf: '112233445-00'
    },
    {
        nome: 'Pedro',
        email: 'pedro123@gmail.com',
        cpf: '123456789-01'
    },
];

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("clientes")) {
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    carregarClientes(); // Preenche a tabela ao carregar a página
});


// Captura o formulário
const formCliente = document.getElementById("formCadastroCliente");

formCliente.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Usa FormData para capturar os valores do formulário
    const formData = new FormData(formCliente);
    
    // Transforma FormData em um objeto simples
    const novoCliente = Object.fromEntries(formData.entries());

    // Validação simples
    if (Object.values(novoCliente).some(valor => !valor.trim())) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Recupera os dados do localStorage
    let clientesSalvos = JSON.parse(localStorage.getItem("clientes")) || [];
    
    // Adiciona o novo cliente ao array
    clientesSalvos.push(novoCliente);

    // Salva no localStorage
    localStorage.setItem("clientes", JSON.stringify(clientesSalvos));

    // Atualiza a tabela
    carregarClientes();

    // Limpa os campos do formulário
    formCliente.reset();

    // Fecha o modal (Bootstrap 5)
    const modal = bootstrap.Modal.getInstance(document.getElementById("cadastroCliente"));
    modal.hide();

    // Exibe uma notificação de sucesso
    Toastify({
        text: "Cliente adicionado com sucesso!",
        duration: 4000
    }).showToast();
});



// PESQUISA DE CLIENTES

// Capturar a referência do campo de pesquisa
let inputPesquisa = document.querySelector('.input-group input');

// Função para buscar e filtrar os clientes na tabela
function buscarCliente() {
    let termoBusca = inputPesquisa.value.toLowerCase(); // Captura o valor digitado e converte para minúsculas
    let linhas = document.querySelectorAll("#tabelaClientes tbody tr"); // Todas as linhas da tabela

    // Percorrer todas as linhas da tabela
    linhas.forEach(linha => {
        let nomeCliente = linha.children[1].textContent.toLowerCase(); // Pegando o nome na segunda coluna

        // Verificar se o nome contém o termo digitado
        if (nomeCliente.includes(termoBusca)) {
            linha.style.display = ""; // Exibir linha se houver correspondência
        } else {
            linha.style.display = "none"; // Ocultar linha se não houver correspondência
        }
    });
}

// Adiciona o evento ao input para executar a busca enquanto o usuário digita
inputPesquisa.addEventListener('keyup', buscarCliente);