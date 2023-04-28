const precodecusto = document.querySelector(".original-price");
const precodevenda = document.querySelector(".sale-price");
const precoFinalElement = document.querySelector('.preco-final');


function somaprecofinal(){
    const precoCusto = precodecusto.value;
    const precoVenda = precodevenda.value;
    if(precoCusto !== "" && precoVenda !== ""){
        const precoFinal = (+precoVenda - +precoCusto).toFixed(2);
        console.log(precoFinal);
        precoFinalElement.textContent = `R$${precoFinal}`;
}}


precodecusto.addEventListener("input", somaprecofinal);
precodevenda.addEventListener("input", somaprecofinal);

