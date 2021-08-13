// Retorna o maior numero
function retornaMaior(num1, num2) {
  if (num1 > num2) {
    return num1;
  }

  return num2;
}
// console.log(retornaMaior(20, 10));

// verifica se a imagem esta no modo paisagem
function ePaisagem(largura, altura) {
  return largura > altura ? true : false;
}
// console.log(ePaisagem(20, 10));

const fizzBuzz = (num) => {
  if (isNaN(num)) {
    return NaN;
  }

  if (num % 3 == 0 && num % 5 == 0) {
    return `${num}: FizzBuzz`;
  }

  if (num % 3 == 0) {
    return `${num}: Fizz`;
  }

  if (num % 5 == 0) {
    return `${num}: Buzz`;
  }

  return num + ": not a FizzBuzz";
};

const rangeNum = () => {
  return Math.round(Math.random() * (100 - 0)) + 0;
};
console.log(fizzBuzz(rangeNum()));
