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

let clientesTable = document.querySelector("#tabelaClientes tbody");
let aux = 1;

for (const cliente of clientes) {
    clientesTable.insertAdjacentHTML('beforeend', 
    `<tr>
        <th scope="row">${aux}</th>
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.cpf}</td>
    </tr>`);
    aux++;
}

// ADICIONANDO NOVOS CLIENTES

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento ao botão de cadastro
    document.querySelector('#cadastroCliente .btn-primary').addEventListener('click', function() {
        // Captura os valores dos inputs
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const cpf = document.getElementById('cpf').value;

        // Validação simples
        if (!nome || !email || !cpf) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Cria nova linha na tabela
        const tbody = document.querySelector('#tabelaClientes tbody');
        const novaLinha = document.createElement('tr');
        
        // Calcula o número sequencial
        const numeroLinha = tbody.childElementCount + 1;

        novaLinha.innerHTML = `
            <th scope="row">${numeroLinha}</td>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${cpf}</td>
        `;

        // Adiciona a linha à tabela
        tbody.appendChild(novaLinha);

        // Limpa o formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cpf').value = '';

        // Fecha o modal usando Bootstrap
        const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroCliente'));
        if (modal) {
            modal.hide();
        } else {
            new bootstrap.Modal(document.getElementById('cadastroCliente')).hide();
        }
    });
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