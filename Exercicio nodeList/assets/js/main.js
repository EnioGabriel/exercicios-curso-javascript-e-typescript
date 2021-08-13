const paragrafos = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let paragrafo of paragrafos) {
  paragrafo.style.backgroundColor = backgroundColorBody;
  paragrafo.style.color = "#fff";
}
