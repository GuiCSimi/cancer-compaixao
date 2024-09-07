//Função para exibir informações sobre um agente específico com base no índice fornecido
function exibirAgente(index) {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém a opção correspondente ao índice fornecido
    let opcao = opcoes[index];

    // Construir o resultado HTML
    let resultado = `
        <div class="item-resultado">
            <img src="${opcao.imagem}" alt="${opcao.agente}">
            <h2>${opcao.agente}</h2>
            <p class="descricao-meta">${opcao.descricao}</p>
            <a href="${opcao.link}" target="_blank">Para mais informações</a>
        </div>
    `;

    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultado;
}
// Função para pesquisar informações com base no valor inserido no campo de pesquisa
function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem informando que nada foi encontrado
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa variáveis para armazenar resultados da pesquisa
    let resultados = "";
    let agente = "";
    let descricao = "";
    let tags = "";

    // Percorre todas as opções disponíveis para encontrar correspondências
    for (let opcao of opcoes) {
        // Converte as propriedades para minúsculas para comparação
        agente = opcao.agente.toLowerCase();
        descricao = opcao.descricao.toLowerCase();
        tags = opcao.tags.toLowerCase();

        // Verifica se a pesquisa corresponde ao agente, descrição ou tags
        if (agente.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adiciona o resultado correspondente ao HTML
            resultados += `
            <div class="item-resultado">
                <img src="${opcao.imagem}">
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
    }
    // Se nenhum resultado for encontrado, exibe uma mensagem solicitando palavras-chave
    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Tente palavras chave.</p>"
    }
    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultados;
}
