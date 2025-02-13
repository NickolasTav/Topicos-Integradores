class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  exibirInformacoes() {
    return `Esté é um ${this.tipo} chamado ${this.nome}`;
  }
}

const cachorro = new Animal("Maggie", "cachorro");

const gato = new Animal("Zed", "gato");

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());

class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  exibirInformacoes() {
    return `Produto ${this.nome}Preço: R$ ${this.preco} estoque: ${this.estoque}
            `;
  }
}

const guarana = new Produto("guarana", 7.49, 983);

console.log(guarana.exibirInformacoes());
