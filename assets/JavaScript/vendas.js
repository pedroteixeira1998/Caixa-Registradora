const produtosString = localStorage.getItem('Produtos');
const select_produto = document.querySelector('#product-sale');
const add = document.querySelector('.button-add');
const table = document.querySelector('#product-add');

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

const soma = () => {
    const precos = document.querySelectorAll('.tab-right');
    let total = 0;
    for (let i = 0; i < precos.length; i++) {
      total += parseFloat(precos[i].textContent);
    }
    document.querySelector('#total-geral').textContent = total.toFixed(2);
  }

  function atualizaTotal() {
    const precos = document.querySelectorAll('.tab-right');
    let total = 0;
    for (let i = 0; i < precos.length; i++) {
      total += parseFloat(precos[i].textContent);
    }
    document.querySelector('#total-geral').textContent = total.toFixed(2);
  }
  

// Criar tabela com Produtos

add.addEventListener('click', function(event){
    event.preventDefault();
    const nomeProduto = select_produto.value;
    const produto = produtos.find(produto => produto.nome === nomeProduto);

    const row = document.createElement('tr');
    const cellQuant = document.createElement('td');
    const cellNome = document.createElement('td');
    const cellPreco = document.createElement('td');
    const cellDel = document.createElement('td');
    const icon = document.createElement('span');

    cellQuant.textContent = document.querySelector('#quant').value;
    cellNome.textContent = produto.nome;
    cellPreco.textContent = document.querySelector('#total').value;
    icon.textContent = "close"

    cellQuant.classList.add('tab-left');
    cellNome.classList.add('tab-left');
    cellPreco.classList.add('tab-right');
    cellDel.classList.add('tab-center');
    icon.classList.add('material-symbols-outlined');

    row.appendChild(cellQuant);
    row.appendChild(cellNome);
    row.appendChild(cellPreco);
    row.appendChild(cellDel);
    cellDel.appendChild(icon);
    table.appendChild(row);


    icon.addEventListener('click', function() {
        table.removeChild(row);
        atualizaTotal();
      });
      soma()

    });


