const relogio = document.querySelector(".relogio");
const inicar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;
let isEnable = true;

const criaHoraDosSegundos = (segundos) => {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};

const inicarRelogio = () => {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
};

inicar.addEventListener("click", (e) => {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  inicarRelogio();
});

pausar.addEventListener("click", (e) => {
  relogio.classList.add("pausado");
  setTimeout(() => {
    clearInterval(timer);
  });
});

zerar.addEventListener("click", (e) => {
  segundos = 0;
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
});
