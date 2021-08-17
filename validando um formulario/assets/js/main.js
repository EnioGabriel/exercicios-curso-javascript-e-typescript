class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  // controla envio do formulario
  handleSubmit(e) {
    // Impedindo envio do form
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulário foi enviado");
      // Forçando o submit 'manualmente'
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const senhaRepetida = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== senhaRepetida.value) {
      this.criaErro(senha, "as senhas estão diferentes");
      this.criaErro(senhaRepetida, "as senhas estão diferentes");
      valid = false;
    }

    if (senha.value.length <= 5 || senha.value.length >= 13) {
      valid = false;
      this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres");
    }

    return valid;
  }

  camposSaoValidos() {
    // Flag para permitir ou não o envio do form
    let valid = true;

    // Removendo error-text a cada submit, para não duplicar o msm erro
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      // Valida os campos em branco
      if (!campo.value) {
        this.criaErro(campo, `${label} não pode estar em branco`);
        valid = false;
      }

      // Valida o CPF
      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) {
          valid = false;
        }
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) {
          valid = false;
        }
      }
    }
    return valid;
  }

  validaUsuario(campo) {
    const nomeUsuario = campo.value;
    let valid = true;

    // Validando apenas numeros e/ou letras
    if (!nomeUsuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuário deve conter apenas números e/ou letras");
      valid = false;
    }

    if (nomeUsuario.length <= 2 || nomeUsuario.length >= 13) {
      this.criaErro(campo, "Usuário deve conter entre 3 e 12 caracteres");
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    // instanciando obj lá da classe 'validaCPF.js'
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    // insere a div abaixo do input no qual tem o erro
    campo.insertAdjacentElement("afterend", div);
  }
}

// Instanciando o obj
const valida = new ValidaFormulario();
