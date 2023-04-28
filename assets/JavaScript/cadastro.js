const precodecusto = document.querySelector(".original-price");
const precodevenda = document.querySelector(".sale-price");
const precoFinalElement = document.querySelector('.preco-final');
const cadastrar = document.querySelector('.form-button');

// Cálculo valor do Lucro
function somaprecofinal(){
    const precoCusto = precodecusto.value;
    const precoVenda = precodevenda.value;
    if(precoCusto !== "" && precoVenda !== ""){
        const precoFinal = (+precoVenda - +precoCusto).toFixed(2);
        precoFinalElement.textContent = `R$${precoFinal}`;
}}

// Adicionar elementos ao array

let dadosMarcados = [];

cadastrar.addEventListener('click', function(){
    const name = document.querySelector('.name').value;
    const custo = precodecusto.value;
    const venda = precodevenda.value;
    const estoque = document.querySelector('.estoque').value;
    const codsis = document.querySelector('.codsis').value;
    const codprod = document.querySelector('.codprod').value;
    const fornecedor = document.querySelector('.fornecedor').value;
    const marca = document.querySelector('.marca').value;
    const validade = document.querySelector('.validade').value;
    const lucro = document.querySelector('.lucro').textContent;
    const inputs = document.querySelectorAll('input');



    const dados = {
        nome: name,
        custo: custo,
        venda: venda,
        estoque: estoque,
        codsis: codsis,
        codprod:codprod,
        fornecedor:fornecedor,
        marca:marca,
        validade:validade,
        lucro:lucro
}

    dadosMarcados.push(dados);
    console.log(dadosMarcados);

    localStorage.setItem('Produtos', JSON.stringify(dadosMarcados));

    inputs.forEach(input => {
        input.value = '';
      });
    
})



precodecusto.addEventListener("input", somaprecofinal);
precodevenda.addEventListener("input", somaprecofinal);

