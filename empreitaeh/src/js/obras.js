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
        cidade: 'João Pessoa',
        estado: 'PB'
    }
];

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("obras")) {
        localStorage.setItem("obras", JSON.stringify(obras));
    }
    
    atualizarTabela(); // Preenche a tabela ao carregar a página
});

// Captura o formulário
const form = document.getElementById("formCadastro");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Usa FormData para capturar os valores do formulário
    const formData = new FormData(form);
    
    // Transforma FormData em objeto simples
    const novaObra = Object.fromEntries(formData.entries());

    // Validação simples
    if (Object.values(novaObra).some(valor => !valor.trim())) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Recupera os dados do localStorage
    let obrasSalvas = JSON.parse(localStorage.getItem("obras")) || [];
    
    // Adiciona o novo objeto ao array
    obrasSalvas.push(novaObra);

    // Salva no localStorage
    localStorage.setItem("obras", JSON.stringify(obrasSalvas));

    // Atualiza a tabela
    atualizarTabela();

    // Limpa os campos do formulário
    form.reset();

    // Fecha o modal (Bootstrap 5)
    const modal = bootstrap.Modal.getInstance(document.getElementById("cadastroObra"));
    modal.hide();

    Toastify({

        text: "Obra adicionada com sucesso!",
        
        duration: 4000
        
    }).showToast();
});
