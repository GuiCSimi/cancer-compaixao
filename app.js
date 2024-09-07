function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
    for (let opcao of opcoes) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${opcao.agente}</a>
            <h2>
            <p class="descricao-meta">${opcao.descricao}</P>
            <a href="${opcao.link}" target="_blank">
                Para mais informações
            </a>
        </div>
    `;
    }
    section.innerHTML = resultados;
}