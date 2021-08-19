const geradorNumRand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// String.fromCharCode => Gera inputs baseados na Tabela ASCII
const geraMaiuscula = () => String.fromCharCode(geradorNumRand(65, 91));
const geraMinuscula = () => String.fromCharCode(geradorNumRand(97, 123));
const geraNumero = () => String.fromCharCode(geradorNumRand(48, 58));
const simbolos = ",.;~^[]{}!@#$%*()_+=-";
const geraSimbolo = () => simbolos[geradorNumRand(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maiusculas,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArray = [];
  qtd = Number(qtd);

  console.log(qtd);
  for (let index = 0; index < qtd; index++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  // join => unindo o array para retornar uma 'string unica'
  return senhaArray.join("").slice(0, qtd);
}
