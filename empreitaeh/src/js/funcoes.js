// Função para preencher a tabela com os dados do localStorage
export function atualizarTabela() {
    const tbody = document.querySelector("#tabelaObras tbody");
    tbody.innerHTML = ""; // Limpa a tabela antes de preencher novamente

    const obrasSalvas = JSON.parse(localStorage.getItem("obras")) || [];

    obrasSalvas.forEach((obra, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${obra.tipo}</td>
            <td>${obra.cliente}</td>
            <td>${obra.logradouro}</td>
            <td>${obra.bairro}</td>
            <td>${obra.cidade}</td>
            <td>${obra.estado}</td>
        `;
        tbody.appendChild(tr);
    });
}