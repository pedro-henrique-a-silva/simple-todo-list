const listaTarefas = document.querySelector('#lista-tarefas');


const addTarefa = () => {
  const addBotao = document.querySelector('#criar-tarefa');

  addBotao.addEventListener('click', () => {
    const inputTarefa = document.querySelector('#texto-tarefa');
    const liTarefa = document.createElement('li');
    liTarefa.innerText = inputTarefa.value;
    inputTarefa.value = '';
    listaTarefas.appendChild(liTarefa);
  })
};

addTarefa();