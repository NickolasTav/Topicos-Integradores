function saudacao(nome) {
  return "Olá " + nome + "!";
}

console.log(saudacao("Níckolas"));

const soma = function (a, b) {
  return a + b;
};

console.log(soma("Níckolas ", "Tavares"));

const multiplicacao = (x, y) => x * y;

console.log(multiplicacao(10, 2));

const pessoa = {
  nomeUsuario: "Níckolas Tavares",
  idade: 21,
  email: "nickolastn@unipam.edu.br",
  usuario: "aluno",
  saudar: function () {
    return "Oi, meu nome é " + this.nomeUsuario + " e eu sou um " + this.usuario + ".";
  },
};


console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar())


