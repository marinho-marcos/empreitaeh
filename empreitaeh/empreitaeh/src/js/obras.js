import { atualizarTabela } from "./funcoes.js";

let obras = [
    {
        tipo: 'casa',
        cliente: 'João',
        logradouro: 'Desembargador Pedro Bandeira',
        bairro: 'centro',
        cidade: 'Guarabira',
        estado: 'PB'
    },
    {
        tipo: 'edifício',
        cliente: 'Pedro',
        logradouro: 'Dom Pedro II',
        bairro: 'centro',
        cidade: 'João pessoa',
        estado: 'PB'
    },
    
];


document.addEventListener("DOMContentLoaded", () => {
    // Verifica se já existe algo salvo no localStorage
    if (!localStorage.getItem("obras")) {
        localStorage.setItem("obras", JSON.stringify(obras));
    }
    
    atualizarTabela(); // Preenche a tabela ao carregar a página
});



// Captura o clique no botão de cadastro
const btnCadastro = document.getElementById("btnCadastro");
btnCadastro.addEventListener("click", () => {
    // Captura os valores dos inputs
    const tipo = document.getElementById("tipo").value;
    const cliente = document.getElementById("cliente").value;
    const logradouro = document.getElementById("logradouro").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    // Validação simples
    if (!tipo || !cliente || !logradouro || !bairro || !cidade || !estado) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria um novo objeto com os dados
    const novaObra = { tipo, cliente, logradouro, bairro, cidade, estado };

    // Recupera os dados do localStorage
    let obrasSalvas = JSON.parse(localStorage.getItem("obras")) || [];
    
    // Adiciona o novo objeto ao array
    obrasSalvas.push(novaObra);

    // Salva de volta no localStorage
    localStorage.setItem("obras", JSON.stringify(obrasSalvas));

    // Atualiza a tabela
    atualizarTabela();

    // Limpa os campos do modal
    document.querySelector("form").reset();

    // Fecha o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("cadastroObra"));
    modal.hide();
});
