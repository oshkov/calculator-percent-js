// Функции

function calculate( {a, b} ) {
    let result = null;
    result = (b-a)/a*100;
    return result;
}


// Работа с версткой

const inputANode = document.querySelector(".js-input-a")
const inputBNode = document.querySelector(".js-input-b")
const btnResultNode = document.querySelector(".js-btn-result")
let num = 0


btnResultNode.addEventListener("click", function() {

    // Поиск блока в HTML куда будет добавляться новый блок с ответами
    let Block = document.querySelector(".block")

    // Вывод чисел из строк ввода и получение результата
    const a = Number(inputANode.value)
    const b = Number(inputBNode.value)
    let result = calculate( {a, b} )

    // Проверка результата на наличие
    if (isNaN(result) === true) {
        return
    }

    // Проверка результата на целое число (если дробное, то 2 числа после запятой)
    if (Number.isInteger(result) === false) {
        result = result.toFixed(2)
    }

    result = result + "%"

    num++

    // Создание блока с результатом
    let html1 = document.createElement('h1')
    html1.className = "js-output-result " + num
    html1.textContent = result

    let html = document.createElement('div')
    html.className = "js-output-block " + num

    html.append(html1)

    // Добавление блока с результатом в HTML
    Block.insertBefore(html, document.querySelectorAll(".js-output-block")[0])

    let outputBlock = document.querySelector(".js-output-block")
    document.querySelectorAll(".js-output-block")[0].style= "max-height: "+ outputBlock.scrollHeight +"px" // Максимальная высота блока изменяется высоту блока

    // Проверка на наличие второго результата, при его наличии он становится прозрачнее
    let nextResult = document.querySelectorAll(".js-output-result")[1]
    if (nextResult != null) {
        nextResult.style= "color: rgba(0, 0, 0, 0.4)"
    } else {
        return
    }

});