function tratandoResultado() {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", (event) => {
    // Impedindo submbit padrao
    event.preventDefault();

    const peso = Number(event.target.querySelector("#peso").value);
    const altura = Number(event.target.querySelector("#altura").value);

    validandoResultado(peso, altura);
  });
}

function validandoResultado(peso, altura) {
  if (!peso || !altura || altura > 2.73 || peso > 595) {
    setResultado("Utilize apenas valores válidos", false);
    return;
  }

  const imc = calculaIMC(peso, altura);

  setResultado(
    `Seu IMC é de: ${imc}. Classificado em: ${classificacaoIMC(imc)}`,
    true
  );
}

function classificacaoIMC(imc) {
  const classificacao = [
    "Abaixo do peso",
    "Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return classificacao[5];
  }

  if (imc >= 34.9) {
    return classificacao[4];
  }

  if (imc >= 29.9) {
    return classificacao[3];
  }

  if (imc >= 24.9) {
    return classificacao[2];
  }

  if (imc >= 18.5) {
    return classificacao[1];
  }

  if (imc < 18.5) {
    return classificacao[0];
  }
}

function calculaIMC(peso, altura) {
  // toFixed(2): usando somente 2 casas decimais
  return (peso / (altura * altura)).toFixed(2);
}

function criarParagrafo() {
  // Criando um paragrafo
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const p = criarParagrafo();

  if (!isValid) {
    p.classList.add("paragrafo-resultado-error");
  } else {
    p.classList.add("paragrafo-resultado-ok");
  }

  // Atribuindo msg ao paragrafo
  p.innerHTML = msg;

  // Tornando visivel o 'p' no elemento 'resultado'
  resultado.appendChild(p);
}
