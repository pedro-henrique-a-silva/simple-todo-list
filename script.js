const listaTarefas = document.querySelector('#lista-tarefas');
const classItemLista = 'item-lista';
const classItemListaClicado = 'selected';

const moveParaCima = (element) => {
  const elementoAnterior = element.previousElementSibling;
  const elementoSelected = element;
  if (elementoAnterior) {
    const objTroca = {
      elementoAnteriorClass: elementoAnterior.className,
      elementoAnteriorText: elementoAnterior.innerText,
      elementoSelectedClass: elementoSelected.className,
      elementoSelectedText: elementoSelected.innerText,
    };
    elementoAnterior.className = objTroca.elementoSelectedClass;
    elementoAnterior.innerText = objTroca.elementoSelectedText;
    elementoSelected.className = objTroca.elementoAnteriorClass;
    elementoSelected.innerText = objTroca.elementoAnteriorText;
  }
};

const moveParaBaixo = (element) => {
  const elementoPosterior = element.nextElementSibling;
  const elementoSelected = element;
  if (elementoPosterior) {
    const objTroca = {
      elementoPosteriorClass: elementoPosterior.className,
      elementoPosteriorText: elementoPosterior.innerText,
      elementoSelectedClass: elementoSelected.className,
      elementoSelectedText: elementoSelected.innerText,
    };
    elementoPosterior.className = objTroca.elementoSelectedClass;
    elementoPosterior.innerText = objTroca.elementoSelectedText;
    elementoSelected.className = objTroca.elementoPosteriorClass;
    elementoSelected.innerText = objTroca.elementoPosteriorText;
  }
};

const restauraListaTarefas = (objListaTarefas) => {
  const { tarefas } = objListaTarefas;
  for (let index = 0; index < tarefas.length; index += 1) {
    const liTarefa = document.createElement('li');
    liTarefa.innerText = tarefas[index].tarefa;
    liTarefa.classList.add(classItemLista);
    if (tarefas[index].completed) {
      liTarefa.classList.add('completed');
    }
    listaTarefas.appendChild(liTarefa);
  }
};

const salvaListaStorage = () => {
  const tarefas = document.querySelectorAll(`.${classItemLista}`);
  const objTarefas = { tarefas: [] };
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].classList.contains('completed')) {
      objTarefas.tarefas.push({ tarefa: tarefas[index].innerText, completed: true });
    } else {
      objTarefas.tarefas.push({ tarefa: tarefas[index].innerText, completed: false });
    }
  }
  localStorage.setItem('listaTarefas', JSON.stringify(objTarefas));
};

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
      const selectedItemlist = document.querySelector('#lista-tarefas .selected');
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
    salvaListaStorage();
  });
};

const limpaListaTarefas = () => {
  const botaoLimpar = document.querySelector('#apaga-tudo');
  botaoLimpar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll(`.${classItemLista}`);
    for (let index = 0; index < tarefas.length; index += 1) {
      tarefas[index].remove();
    }
    localStorage.removeItem('listaTarefas');
  });
};

const removeTarefasConcluidas = () => {
  const botaoLimpaConcluidos = document.querySelector('#remover-finalizados');
  botaoLimpaConcluidos.addEventListener('click', () => {
    const tarefasConcluidas = document.querySelectorAll('.completed');
    for (let index = 0; index < tarefasConcluidas.length; index += 1) {
      tarefasConcluidas[index].remove();
    }
    salvaListaStorage();
  });
};

const salvaListaTaregas = () => {
  const botalSalvaTarefas = document.querySelector('#salvar-tarefas');
  botalSalvaTarefas.addEventListener('click', () => {
    salvaListaStorage();
  });
};

const initiate = () => {
  const listaTarefasStorage = JSON.parse(localStorage.getItem('listaTarefas'));

  if (listaTarefasStorage) {
    restauraListaTarefas(listaTarefasStorage);
  }
};

const eventoMoverCima = () => {
  const botaoMoverCima = document.querySelector('#mover-cima');

  botaoMoverCima.addEventListener('click', () => {
    const itemListaSelected = document.querySelector('.selected');
    if (itemListaSelected) {
      moveParaCima(itemListaSelected);
    }
  });
};

const eventoMoverBaixo = () => {
  const botaoMoverCima = document.querySelector('#mover-baixo');

  botaoMoverCima.addEventListener('click', () => {
    const itemListaSelected = document.querySelector('.selected');
    if (itemListaSelected) {
      moveParaBaixo(itemListaSelected);
    }
  });
};

const removeItemSelecionado = () => {
  const botaoRemoveSelected = document.querySelector('#remover-selecionado');
  botaoRemoveSelected.addEventListener('click', () => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected) {
      itemSelected.remove();
    }
  });
};

initiate();
addTarefa();
efeitoClickTarefas();
efeitoDbClickTarefas();
limpaListaTarefas();
removeTarefasConcluidas();
salvaListaTaregas();
eventoMoverCima();
eventoMoverBaixo();
removeItemSelecionado();
