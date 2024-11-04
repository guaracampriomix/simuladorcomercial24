function calcularTabela() {
    const metaMensal = parseFloat(document.getElementById("meta-mensal").value);
    const tabelaResultados = document.getElementById("tabela-resultados");

    if (isNaN(metaMensal) || metaMensal <= 0) {
        tabelaResultados.querySelector("tbody").innerHTML = "<tr><td colspan='3' style='text-align: center;'>Por favor, insira uma meta válida.</td></tr>";
        return;
    }

    const produtos = {
        "1,5L": { unitario: 2.631578947, pallet: 50 },
        "Água 12": { unitario: 1.789473684, pallet: 150 },
        "Bombona": { unitario: 1.461988304, pallet: 48 },
        "Caixa 24": { unitario: 2.000000000, pallet: 100 },
        "Caixa 36": { unitario: 3.000000000, pallet: 84 },
        "Concentrado": { unitario: 3.508771930, pallet: 60 },
        "Energetico 2L": { unitario: 3.508771930, pallet: 80 },
        "Energetico Lata": { unitario: 0.471929825, pallet: 468 },
        "Ginseng": { unitario: 1.754385965, pallet: 100 },
        "Pet 250": { unitario: 0.877192982, pallet: 203 }
    };

    const tbody = tabelaResultados.querySelector("tbody");
    tbody.innerHTML = "";

    for (const produto in produtos) {
        const { unitario, pallet } = produtos[produto];
        const caixaFisica = Math.round(metaMensal / unitario);
        const quantidadePallet = Math.ceil(caixaFisica / pallet);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="text-align: center;">${produto}</td>
            <td style="text-align: center;">${caixaFisica}</td>
            <td style="text-align: center;">${quantidadePallet}</td>
        `;
        tbody.appendChild(row);
    }
}
