const listaTarefas = document.querySelector('#lista-tarefas');


const addTarefa = () => {
  const addBotao = document.querySelector('#criar-tarefa');

  addBotao.addEventListener('click', () => {
    const inputTarefa = document.querySelector('#texto-tarefa');
    const liTarefa = document.createElement('li');
    liTarefa.innerText = inputTarefa.value;
    liTarefa.classList.add('item-lista')
    inputTarefa.value = '';
    listaTarefas.appendChild(liTarefa);
  })
};

const efeitoClickTarefas = () => {
  listaTarefas.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-lista')) {
      event.target.classList.add('item-lista-clicado')
    }
  })
}

addTarefa();
efeitoClickTarefas();