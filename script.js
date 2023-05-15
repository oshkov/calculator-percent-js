// Функции

function percent(a, b) {
    return (b-a)/a*100;
}


// Логика

function calculate( {a, b} ) {
    let result = null;

    result = percent(a, b)

    return result;
}


// Работа с версткой

const inputANode = document.querySelector(".js-input-a")
const inputBNode = document.querySelector(".js-input-b")
const btnResultNode = document.querySelector(".js-btn-result")
const outputNode = document.querySelector(".js-output-result")

btnResultNode.addEventListener("click", function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    

    const result = calculate( {a, b} ) + "%";

    outputNode.innerHTML = result;
});