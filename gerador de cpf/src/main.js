import GeraCPF from "./modules/GeraCPF";
import "./assets/css/style.css";

// Chamando função imediatamente (IIFE) função auto executavel ao abrir a pagina
(() => {
  const geradorDeCPF = new GeraCPF();
  const divCpfGerado = document.querySelector(".cpf-gerado");
  const btnCopiaCPF = document.querySelector(".btn-copia-cpf");
  divCpfGerado.innerHTML = geradorDeCPF.geraNovoCpf();

  // listener para copiar cpf
  btnCopiaCPF.addEventListener("click", (event) => {
    /* Criando o ctrl+c clicando no btn de 'Copiar CPF' */
    navigator.clipboard.writeText(divCpfGerado.innerHTML);
    alert(`O CPF ${divCpfGerado.innerHTML} foi copiado`);
    // document.location.reload();
  });
})();
