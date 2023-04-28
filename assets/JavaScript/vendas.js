const produtosString = localStorage.getItem('Produtos');
const select_produto = document.querySelector('#product-sale');

const produtos = JSON.parse(produtosString);

let nomesProdutos = [];

produtos.forEach(produto => {
    nomesProdutos.push(produto.nome);
});

console.log(nomesProdutos);

nomesProdutos.forEach(nomeProduto => {
    const option = document.createElement('option');
    option.text = nomeProduto;
    option.value = nomeProduto;
    select_produto.add(option);
})

select_produto.addEventListener('change', function(){
    const nomeProduto = select_produto.value;

    const produto = produtos.find(produto => produto.nome === nomeProduto)

    document.querySelector('#codigo').value = produto.codsis;
    document.querySelector('#valor').value = produto.venda;
    const quantidade = document.querySelector('#quant');
    quantidade.value = 1
    const total = document.querySelector('#total');
    total.value = (+quantidade.value * +produto.venda).toFixed(2);
    quantidade.addEventListener('input', function(){
        total.value = (+quantidade.value * +produto.venda).toFixed(2);
    })
})