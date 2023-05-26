// Функции

function calculate( {a, b} ) {
    let result = null;
    result = (b-a)/a*100;
    return result;
}

function deleteResult(num) {
 
    // Выбираются блок и кнопка, чтобы удалить их
    let outputBlock = document.getElementsByClassName("js-output-block " + num)[0]
    let outputFlexBtn = document.getElementsByClassName("js-output-flex-button " + num)[0]

    outputBlock.style = " padding: 0 0 0 700px; user-select: none" // Плавно изменяется паддинг
    outputFlexBtn.remove() // Сразу удаляется кнопка, после нажатия

    // Таймер для удаления всего блока (Сработает через 0.5 сек)
    setTimeout(() => {
        try {
            document.querySelectorAll(".js-output-result")[1].style= "color: black"
            document.querySelectorAll(".js-output-a-b")[1].style= "color: black"
        } catch (error) {
            return
        }
        outputBlock.remove()
    }, 500); 
}

let num = 0
function result() {
    const inputANode = document.querySelector(".js-input-a")
    const inputBNode = document.querySelector(".js-input-b")

    // Поиск блока в HTML куда будет добавляться новый блок с ответами
    let Block = document.querySelector(".results-block")

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

    // // Создание блока с результатом
    let htmlBlock = `<div class="js-output-block ${num}">
    <div class="js-output-flex ${num}">
        <h1 class="js-output-result ${num}">${result}</h1>
        <p class="js-output-a-b ${num}">${a} → ${b}</p>
    </div>
    <div class="js-output-flex-button ${num}">
        <button class="js-delete-button ${num}" onclick="deleteResult(${num})">×</button>
    </div>
    </div>`

    // Добавление блока с результатом в HTML
    Block.insertAdjacentHTML('afterbegin', htmlBlock);

    let outputBlock = document.querySelector(".js-output-block")
    document.querySelectorAll(".js-output-block")[0].style= "max-height: "+ outputBlock.scrollHeight +"px; padding: 15px; overflow: visible" // Максимальная высота блока изменяется высоту блока

    // Проверка на наличие второго результата, при его наличии он становится прозрачнее
    nextResult = document.querySelectorAll(".js-output-result")[1]
    if (nextResult != null) {
        document.querySelectorAll(".js-output-result")[1].style= "color: rgba(0, 0, 0, 0.4)"
        document.querySelectorAll(".js-output-a-b")[1].style= "color: rgba(0, 0, 0, 0.2)"
    } else {
        return
    }
}

// Строчки ограничивающие ввод в input до 18 символов
let inputA = document.querySelector('.js-input-a');
inputA.oninput = function(){
  this.value = this.value.substr(0, 18);
}
let inputB = document.querySelector('.js-input-b');
inputB.oninput = function(){
  this.value = this.value.substr(0, 18);
}