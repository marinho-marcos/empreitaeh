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

let obrasTable = document.querySelector("#tabelaObras tbody");
let aux = 1;

for (const obra of obras) {
    obrasTable.insertAdjacentHTML('beforeend', 
    `<tr>
        <th scope="row">${aux}</th>
        <td>${obra.tipo}</td>
        <td>${obra.cliente}</td>
        <td>${obra.logradouro}</td>
        <td>${obra.bairro}</td>
        <td>${obra.cidade}</td>
        <td>${obra.estado}</td>
    </tr>`);
    aux++;
}

// ADICIONANDO NOVOS CLIENTES

// document.addEventListener('DOMContentLoaded', function() {
//     // Adiciona evento ao botão de cadastro
//     document.querySelector('#cadastroObra .btn-primary').addEventListener('click', function() {
//         // Captura os valores dos inputs
//         const tipo = document.getElementById('tipo').value;
//         const cliente = document.getElementById('cliente').value;
//         const logradouro = document.getElementById('logradouro').value;
//         const bairro = document.getElementById('bairro').value;
//         const cidade = document.getElementById('cidade').value;
//         const estado = document.getElementById('estado').value;

//         // Validação simples
//         if (!tipo || !cliente || !logradouro || !bairro || !cidade || !estado) {
//             alert('Por favor, preencha todos os campos!');
//             return;
//         }

//         // Cria nova linha na tabela
//         const tbody = document.querySelector('#tabelaObras tbody');
//         const novaLinha = document.createElement('tr');
        
//         // Calcula o número sequencial
//         const numeroLinha = tbody.childElementCount + 1;

//         novaLinha.innerHTML = `
//             <th scope="row">${numeroLinha}</td>
//             <td>${tipo}</td>
//             <td>${cliente}</td>
//             <td>${logradouro}</td>
//             <td>${bairro}</td>
//             <td>${cidade}</td>
//             <td>${estado}</td>
//         `;

//         // Adiciona a linha à tabela
//         tbody.appendChild(novaLinha);

//         // Limpa o formulário
//         document.getElementById('tipo').value = '';
//         document.getElementById('cliente').value = '';
//         document.getElementById('logradouro').value = '';
//         document.getElementById('bairro').value = '';
//         document.getElementById('cidade').value = '';
//         document.getElementById('estado').value = '';

//         // Fecha o modal usando Bootstrap
//         const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroObra'));
//         if (modal) {
//             modal.hide();
//         } else {
//             new bootstrap.Modal(document.getElementById('cadastroObra')).hide();
//         }
//     });
// });


// PESQUISA DE CLIENTES

// // Capturar a referência do campo de pesquisa
// let inputPesquisa = document.querySelector('.input-group input');

// // Função para buscar e filtrar os clientes na tabela
// function buscarCliente() {
//     let termoBusca = inputPesquisa.value.toLowerCase(); // Captura o valor digitado e converte para minúsculas
//     let linhas = document.querySelectorAll("#tabelaObras tbody tr"); // Todas as linhas da tabela

//     // Percorrer todas as linhas da tabela
//     linhas.forEach(linha => {
//         let nomeCliente = linha.children[2].textContent.toLowerCase(); // Pegando o nome na terceira coluna

//         // Verificar se o nome contém o termo digitado
//         if (nomeCliente.includes(termoBusca)) {
//             linha.style.display = ""; // Exibir linha se houver correspondência
//         } else {
//             linha.style.display = "none"; // Ocultar linha se não houver correspondência
//         }
//     });
// }

// // Adiciona o evento ao input para executar a busca enquanto o usuário digita
// inputPesquisa.addEventListener('keyup', buscarCliente);