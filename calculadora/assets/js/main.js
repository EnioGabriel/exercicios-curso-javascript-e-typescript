function Calculadora() {
  this.container = document.querySelector(".container");
  this.display = document.querySelector(".display");

  this.limpaDisplay = () => {
    if (this.display.value === "error" || this.display.value === "0") {
      this.display.value = "";
    }
  };

  // Inicializando os listeners
  this.inicia = () => {
    this.capturaCliques();
    this.capturaTeclas();
  };

  this.capturaCliques = () => {
    // submete o listener somente qnd dá o foco nos botões
    document.addEventListener("focusin", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  this.capturaTeclas = () => {
    // submete o listener somente qnd o usuário pressiona algo no teclado
    document.addEventListener("keyup", (event) => {
      this.display.focus();
      // caso o usuário clique enter
      if (event.key === "Enter") {
        this.realizaConta();
        // caso o usuário clique para apagar
      } else if (event.key === "Backspace") {
        this.del();
        // chama função para ver se usuário clicou algum num válido
      } else {
        this.isNumberOrOperations(event);
      }
    });
  };

  // verifica se o usuário clicou em algum num válido do teclado
  this.isNumberOrOperations = (event) => {
    this.limpaDisplay();
    const operacoesValidas = ["(", ")", "/", "*", "+", "-"];
    const numValidos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let number of numValidos) {
      if (Number(event.key) === number) {
        this.display.value += event.key;
      }
    }

    for (let number of operacoesValidas) {
      if (event.key === number) {
        this.display.value += event.key;
      }
    }

    return false;
  };

  this.realizaConta = () => {
    try {
      // retorna a função caso seja um codigo js válido
      const conta = eval(this.display.value);

      if (!conta && conta !== 0) {
        this.display.value = "error";
        return;
      }
      this.display.value = conta;
    } catch (e) {
      this.display.value = "error";
      return;
    }
  };

  this.addNumDisplay = (el) => {
    this.limpaDisplay();
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "0";
  };

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
}

// instanciando a função (classe)
const calculadora = new Calculadora();
calculadora.inicia();
