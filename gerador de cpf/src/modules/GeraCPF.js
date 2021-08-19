import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
  numerosRandomicos(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  // Concatenando strings para retornar um CPF formatado e válido
  formataCPF(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "." +
      cpf.slice(9, 11)
    );
  }

  geraNovoCpf() {
    const cpfSemDigito = this.numerosRandomicos();
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);

    return this.formataCPF(cpfSemDigito + digito1 + digito2);
  }
}
