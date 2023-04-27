const precodecusto = document.querySelector(".original-price");
const precodevenda = document.querySelector(".sale-price");
const precoFinalElement = document.querySelector('.preco-final');

function somaprecofinal(){
    const precoCusto = precodecusto.value;
    const precoVenda = precodevenda.value;
    if(precoCusto !== "" && precoVenda !== ""){
        const precoFinal = +precoCusto - +precoVenda;
        console.log(precoFinal);
        precoFinalElement.textContent = `Preço Final: ${precoFinal}`;
    }
}

precodecusto.addEventListener("input", somaprecofinal);
precodevenda.addEventListener("input", somaprecofinal);

