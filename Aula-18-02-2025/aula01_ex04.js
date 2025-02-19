// Função que recebe um objeto como argumento

function exibirInfoProdutos(produto) {
  return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidade`;
}

const produto = {
  nome: "Arroz Branco 5 KG",
  preco: 18.32424242,
  estoque: 145,
};

console.log(exibirInfoProdutos(produto));
