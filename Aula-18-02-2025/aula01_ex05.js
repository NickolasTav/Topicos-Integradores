const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
  console.log(`Número: ${num}`);
});

const dobrados = numeros.map((num) => num * 2);
console.log(dobrados);

const a = dobrados.filter((a) => a > 6);
console.log(a);

const maiorque8 = dobrados.find((num) => num > 8);
console.log(maiorque8);

const maiorque1 = dobrados.every((num) => num > 1);
console.log(maiorque1);
