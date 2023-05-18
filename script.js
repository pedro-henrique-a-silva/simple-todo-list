const listaTarefas = document.querySelector('#lista-tarefas');
const classItemLista = 'item-lista';
const classItemListaClicado = 'item-lista-clicado';

const addTarefa = () => {
  const addBotao = document.querySelector('#criar-tarefa');

  addBotao.addEventListener('click', () => {
    const inputTarefa = document.querySelector('#texto-tarefa');
    const liTarefa = document.createElement('li');
    liTarefa.innerText = inputTarefa.value;
    liTarefa.classList.add(classItemLista);
    inputTarefa.value = '';
    listaTarefas.appendChild(liTarefa);
  });
};

const efeitoClickTarefas = () => {
  listaTarefas.addEventListener('click', (event) => {
    if (event.target.classList.contains(classItemLista)) {
      const selectedItemlist = document.querySelector('#lista-tarefas .item-lista-clicado');
      if (selectedItemlist) {
        selectedItemlist.classList.remove(classItemListaClicado);
        event.target.classList.add(classItemListaClicado);
      } else {
        event.target.classList.add(classItemListaClicado);
      }
    }
  });
};

const efeitoDbClickTarefas = () => {
  listaTarefas.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains(classItemLista)) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  });
};

addTarefa();
efeitoClickTarefas();
efeitoDbClickTarefas();
