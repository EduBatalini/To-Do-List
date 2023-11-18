
const localStorageKey = 'inputs'; 

// Validar se a tarefa já existe na lista
function validar() {
// Obtém os valores do armazenamento local ou um array vazio
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
      // Obtém o valor do campo de entrada
    let inputValor = document.getElementById('inputs').value
    // Verifica se o valor já existe na lista
    let existente = valores.find(x => x.name == inputValor)
    // Retorna true se existente, false caso contrário
    return !existente ? false : true
}


// Função chamada ao adicionar uma nova tarefa
function add_task() {
 // Obtém o elemento de entrada
    let input = document.getElementById('inputs');
    // Remove qualquer estilo de borda
input.style.border=''


// Verifica se o campo de entrada está vazio
    if (!input.value.trim()) {
        alert("Digite algo para inserir na lista");

    }
    // Verifica se a tarefa já existe na lista
    else if (validar()) {
        alert("Tarefa Já existente")
    }
    // Adiciona a tarefa à lista
    else {
    // Obtém os valores do armazenamento local ou um array vazio
        let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        // Adiciona a nova tarefa aos valores
        valores.push({
            name: input.value.trim()
        });
        // Atualiza o armazenamento local
        localStorage.setItem(localStorageKey, JSON.stringify(valores));
        // Atualiza a exibição da lista
        valoress();
    }
    // Limpa o campo de entrada
    input.value = '';
}

// Função para exibir as tarefas na lista
function valoress() {
// Obtém os valores do armazenamento local ou um array vazio
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    // Obtém a lista HTML
    let list = document.getElementById('to-do-list');
    // Limpa a lista HTML
    list.innerHTML = '';
    // Itera sobre os valores para adicionar cada tarefa à lista
    for (let i = 0; i < valores.length; i++) {
    // Adiciona a tarefa ao HTML com um botão
        list.innerHTML += `<li>${valores[i]['name']} <button id="btn-check" onclick='removeItem("${valores[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button></li>`;
    }
}
// Função para remover uma tarefa da lista
function removeItem(data) {
// Obtém os valores do armazenamento local ou um array vazio
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
     // Encontra o índice da tarefa a ser removida
    let index = valores.findIndex(x => x.name == data);
    // Se a tarefa for encontrada, remove-a e atualiza a exibição
    if (index !== -1) {
        valores.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(valores));
        valoress();
    }
}
// Chama a função valoress() inicialmente para exibir as tarefas armazenadas
valoress();
