const txtTarefa = document.querySelector(".input-nova-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefas");
const listaTarefas = document.querySelector(".tarefas");

const criaLi = () => {
  return document.createElement("li");
};

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  listaTarefas.appendChild(li);
  txtTarefa.value = "";

  criaBotaoApagar(li);
  salvarTarefas();
}

function salvarTarefas() {
  // pegando todos os elementos da minha 'li'
  const liTarefas = listaTarefas.querySelectorAll("li");

  const arrayDeTarefas = [];

  for (let tarefa of liTarefas) {
    // limpando a string e colocando no array
    // 'trim': remove espaço sobrando
    arrayDeTarefas.push(tarefa.innerText.replace("Apagar", "").trim());
  }

  // passando meu array para o formato JSON (string)
  const tarefasJSON = JSON.stringify(arrayDeTarefas);

  localStorage.setItem("tarefas", tarefasJSON);
}

function criaBotaoApagar(li) {
  // Adicionando um espaçamento para melhor visualização do novo btn
  li.innerText += " ";

  // Criando um novo btn
  const btnApagar = document.createElement("button");

  // Criando uma classe para o btn
  btnApagar.setAttribute("class", "apagar");

  // Adicionando o nome no btn
  btnApagar.innerText = " Apagar";

  // integrando o btn com a minha lista
  li.appendChild(btnApagar);
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");

  // Convertendo de JSON (string) para array
  const arrayDeTarefas = JSON.parse(tarefas);

  for (let tarefa of arrayDeTarefas) {
    criaTarefa(tarefa);
  }
}

// Carregando tarefas salvas no localStorage caso exista
adicionarTarefasSalvas();

// Verifica se o usuário clicou em enter
txtTarefa.addEventListener("keypress", (e) => {
  if (!txtTarefa.value) {
    return;
  }

  if (e.keyCode === 13) {
    criaTarefa(txtTarefa.value);
  }
});

btnAddTarefa.addEventListener("click", () => {
  if (!txtTarefa.value) {
    return;
  }

  criaTarefa(txtTarefa.value);
});

// listener na pagina inteira para identificar onde o usuário clica
document.addEventListener("click", (event) => {
  // armazenando o elemto clicado
  const elemento = event.target;

  // Se clicou em apagar
  if (elemento.classList.contains("apagar")) {
    // pegando o pai do elemento ('li' no caso) e removendo da lista
    elemento.parentElement.remove();
    // limpando o array com a tarefa apagada e tirando do localStorage
    salvarTarefas();
  }
});
